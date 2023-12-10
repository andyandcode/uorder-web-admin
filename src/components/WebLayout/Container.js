import { ExclamationCircleFilled } from '@ant-design/icons';
import * as signalR from '@microsoft/signalr';
import { Modal, notification, theme } from 'antd';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Config from '../../configuration';
import { rootKeys } from '../../configuration/routesConfig';
import NotSupportMobile from '../../pages/Redirect/NotSupportMobile';
import useLanguages from '../UseLanguages';
import MainView from './MainView';
import { MenuList } from './MenuList';
import propsProvider from './PropsProvider';

const { confirm } = Modal;

const rootSubmenuKeys = [rootKeys.homeUrl, rootKeys.manageUrl, rootKeys.salesUrl, rootKeys.settingUrl];

export default function Conainer(props) {
    const { t, i18n, dispatch, history } = props;
    const navigate = useNavigate();
    const [notificationCount, setNotificationCount] = useState(5);
    const [collapsed, setCollapsed] = useState(false);
    const cookies = new Cookies();
    const languages = useLanguages();
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [openSiderKeys, setOpenSiderKeys] = useState([rootKeys.homeUrl]);
    const [api, contextHolder] = notification.useNotification();

    const access = cookies.get(Config.storageKey.tokenKey);
    useEffect(() => {
        if (!access) {
            Modal.error({
                title: t('main.notification.login_expired.title'),
                content: t('main.notification.login_expired.content'),
                onOk() {
                    history(rootKeys.loginUrl);
                },
            });
        }
    }, [cookies]);

    const showLogOutConfirm = () => {
        confirm({
            title: t('main.notification.account_quick_access.title'),
            icon: <ExclamationCircleFilled />,
            content: t('main.notification.account_quick_access.message'),
            okType: 'danger',
            okText: t('main.components.button.logout'),
            cancelText: t('main.components.button.cancel'),
            onOk() {
                cookies.remove(Config.storageKey.tokenKey);
                history(rootKeys.loginUrl);
            },
            onCancel() {},
        });
    };

    const items = [
        {
            label: t('main.navigation.account_quick_access.infomation'),
            onClick: () => navigate(rootKeys.accountSettingUrl),
            key: '1',
        },
        {
            label: t('main.components.button.logout'),
            type: 'danger',

            onClick: showLogOutConfirm,
            key: '2',
        },
    ];
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openSiderKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenSiderKeys(keys);
        } else {
            setOpenSiderKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const handleMenuClick = ({ key }) => {
        if (key === 'signout') {
        } else {
            navigate(key);
        }
    };

    let location = useLocation();
    const [current, setCurrent] = useState(
        location.pathname === '/' || location.pathname === '' ? '/' : location.pathname,
    );

    useEffect(() => {
        if (location) {
            if (current !== location.pathname) {
                setCurrent(location.pathname);
                // dispatch(showLoading());
                // setTimeout(() => {
                //     dispatch(hideLoading());
                // }, 2500);
            }
        }
    }, [location, current]);

    useEffect(() => {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl('https://localhost:7297/actionHub')
            .configureLogging(signalR.LogLevel.Information)
            .build();
        connection
            .start()
            .then(() => console.log('Connection established action'))
            .catch((err) => console.error('SignalR Connection Error: ', err));

        connection.on('SendCallStaffNotification', (data) => {
            api.warning({
                message: t('main.notification.action.call_staff_title'),
                description: t('main.notification.action.call_staff_description', { table: data.name }),
                duration: null,
            });
        });

        return () => {
            connection.stop();
        };
    }, []);

    const containerProps = {
        ...props,
        collapsed,
        current,
        openSiderKeys,
        colorBgContainer,
        languages,
        items,
        notificationCount,
        setCollapsed,
        onOpenChange,
        handleMenuClick,
        MenuList,
        access,
        contextHolder,
    };

    if (isMobile) {
        return <NotSupportMobile />;
    }

    return <MainView {...propsProvider(containerProps)} />;
}

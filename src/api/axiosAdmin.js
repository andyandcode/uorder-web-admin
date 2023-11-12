import axios from 'axios';
import queryString from 'query-string';
import Config from '../configuration/index';

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
export const axiosAdmin = axios.create({
    baseURL: Config.endPointAdmin,
    headers: {
        'content-type': 'multipart/form-data',
    },
    timeout: 10000,
    paramsSerializer: (params) => queryString.stringify(params),
});

export const axiosAdminJson = axios.create({
    baseURL: Config.endPointAdmin,
    headers: {
        'content-type': 'application/json-patch+json',
    },
    timeout: 10000,
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosAdmin.interceptors.request.use(async (config) => {
    return config;
});

axiosAdmin.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    (error) => {
        throw error;
    },
);

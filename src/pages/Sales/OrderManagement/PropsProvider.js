export default function propsProvider(props) {
    const {
        history,
        dispatch,
        t,
        columns,
        data,
        getColumnSearchProps,
        enterLoading,
        loadings,
        handleActionButtonEditClick,
        handleActionButtonDeleteClick,
        handleActionButtonTurnOffClick,
        handleActionButtonTurnOnClick,
        dataToEdit,
        openCreateModel,
        openViewModel,
        handleCancelClick,
        handleCreateSubmitClick,
        handleEditSubmitClick,
        createForm,
        viewForm,
        initialValuesInEditForm,
        handleViewCancelClick,
        handleCreateCancelClick,
        messageContextHolder,
        draggerFileProps,
        expandedRowRenderSelection,
        loadingTable,
        handleRefreshDataClick,
        loadingsRefreshButton,
        defaultFileList,
        orderStatusSelect,
        paymentStatusSelect,
        onChangePaymentStatusSelect,
        tableData,
        onChangeOrderStatusSelect,
        handleNewOrderClick,
        switchActionColumn,
        handleActionButtonViewClick,
        viewData,
        dishData,
        handleChangeOrderStatus,
    } = props;
    return {
        history,
        dispatch,
        t,
        columns,
        data,
        getColumnSearchProps,
        enterLoading,
        loadings,
        handleActionButtonEditClick,
        handleActionButtonDeleteClick,
        handleActionButtonTurnOffClick,
        handleActionButtonTurnOnClick,
        dataToEdit,
        openCreateModel,
        openViewModel,
        handleCancelClick,
        handleCreateSubmitClick,
        handleEditSubmitClick,
        createForm,
        viewForm,
        initialValuesInEditForm,
        handleViewCancelClick,
        handleCreateCancelClick,
        messageContextHolder,
        draggerFileProps,
        expandedRowRenderSelection,
        loadingTable,
        handleRefreshDataClick,
        loadingsRefreshButton,
        defaultFileList,
        orderStatusSelect,
        paymentStatusSelect,
        onChangePaymentStatusSelect,
        tableData,
        onChangeOrderStatusSelect,
        handleNewOrderClick,
        switchActionColumn,
        handleActionButtonViewClick,
        viewData,
        dishData,
        handleChangeOrderStatus,
    };
}

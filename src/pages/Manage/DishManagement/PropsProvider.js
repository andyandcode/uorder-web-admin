export default function propsProvider(props) {
    const {
        history,
        dispatch,
        t,
        columns,
        tableData,
        getColumnSearchProps,
        enterLoading,
        loadings,
        handleActionButtonEditClick,
        handleActionButtonDeleteClick,
        handleActionButtonTurnOffClick,
        handleActionButtonTurnOnClick,
        dataToEdit,
        openCreateModel,
        openEditModel,
        handleCancelClick,
        handleCreateSubmitClick,
        handleEditSubmitClick,
        createForm,
        editForm,
        initialValuesInEditForm,
        handleEditCancelClick,
        handleCreateCancelClick,
        messageContextHolder,
        draggerFileProps,
        expandedRowRenderSelection,
        loadingTable,
        handleRefreshDataClick,
        loadingsRefreshButton,
        defaultFileList,
        handleCreateNewClick,
        handleRefreshClick,
        switchActionColumn,
        defaultFile,
    } = props;
    return {
        history,
        dispatch,
        t,
        columns,
        tableData,
        getColumnSearchProps,
        enterLoading,
        loadings,
        handleActionButtonEditClick,
        handleActionButtonDeleteClick,
        handleActionButtonTurnOffClick,
        handleActionButtonTurnOnClick,
        dataToEdit,
        openCreateModel,
        openEditModel,
        handleCancelClick,
        handleCreateSubmitClick,
        handleEditSubmitClick,
        createForm,
        editForm,
        initialValuesInEditForm,
        handleEditCancelClick,
        handleCreateCancelClick,
        messageContextHolder,
        draggerFileProps,
        expandedRowRenderSelection,
        loadingTable,
        handleRefreshDataClick,
        loadingsRefreshButton,
        defaultFileList,
        handleCreateNewClick,
        handleRefreshClick,
        switchActionColumn,
        defaultFile,
    };
}

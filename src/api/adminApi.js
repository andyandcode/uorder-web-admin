import axiosClient from './axiosAdmin';

const FileUpload = {
    uploadFile: (params) => {
        const url = '/file/upload';
        return axiosClient.post(url, params, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    },
    deleteFile: (params) => {
        const url = `/file/delete/${params}`;
        return axiosClient.delete(url);
    },
};

const DishAdmin = {
    getListDish: (params) => {
        const url = '/dish/getAll';
        return axiosClient.get(url, { params });
    },
    insertDish: (params) => {
        const url = '/dish/post';
        return axiosClient.post(url, params, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    },
    updateDish: (params) => {
        const url = `/dish/put/${params.id}`;
        return axiosClient.put(url, params);
    },
    deleteDish: (params) => {
        const url = `/dish/delete/${params}`;
        return axiosClient.delete(url);
    },
};

export { DishAdmin, FileUpload };

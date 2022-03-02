export const loadDataRequest = () => {
    return {
        type: '@user/LOAD_DATA_REQUEST',
    };
};

export const loadDataSuccess = (data) => {
    return {
        type: '@user/LOAD_DATA_SUCCESS',
        data,
    };
};

export const loadDataError = () => {
    return {
        type: '@user/LOAD_DATA_ERROR',
    };
};
export const loadDataRequest = () => {
    return {
        type: '@ip/LOAD_DATA_REQUEST',
    };
};

export const loadDataSuccess = (data) => {
    return {
        type: '@ip/LOAD_DATA_SUCCESS',
        data,
    };
};

export const loadDataError = () => {
    return {
        type: '@ip/LOAD_DATA_ERROR',
    };
};
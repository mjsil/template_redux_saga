const INITIAL_STATE = {
    data: [],
    isLoading: false,
    error: false,
};

export const ipReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case '@ip/LOAD_DATA_REQUEST':
            return {
                data: [],
                isLoading: true,
                error: false,
            };
        case '@ip/LOAD_DATA_SUCCESS':
            return {
                data: action.data,
                isLoading: false,
                error: false,
            };
        case '@ip/LOAD_DATA_ERROR':
            return {
                data: [],
                isLoading: false,
                error: true,
            };
        default:
            return state;
    };
};
const INITIAL_STATE = {
    data: [],
    isLoading: false,
    error: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case '@user/LOAD_DATA_REQUEST': 
            return {
              data: [],
              isLoading: true,
              error: false,  
            };
        case '@user/LOAD_DATA_SUCCESS': 
            return {
                data: action.data,
                isLoading: false,
                error: false,
            };
        case '@user/LOAD_DATA_ERROR': 
            return {
                data: [],
                isLoading: false,
                error: true,
            }
        default:
            return state;
    }
};
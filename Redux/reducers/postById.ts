import * as Types from '../constants/postById';

const initialState = {
    loader: false,
    data: [],
    error: false,
};

const postById = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_BY_ID:
            return {
                ...state,
                loader: true,
                error: false,
            };
        case Types.SUCCESS_BY_ID:
            return {
                ...state,
                loader: false,
                data: action.payload,
            };
        case Types.ERROR_BY_ID:
            return {
                ...state,
                loader: false,
                error: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default postById;

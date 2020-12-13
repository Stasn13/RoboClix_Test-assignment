import * as Types from '../constants/posts';

const initialState = {
    loader: false,
    data: [],
    error: false,
};

const posts = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH:
            return {
                ...state,
                loader: true,
                error: false,
            };
        case Types.SUCCESS:
            return {
                ...state,
                loader: false,
                data: action.payload,
            };
        case Types.ERROR:
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

export default posts;

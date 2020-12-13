import * as Types from '../constants/sendComment';

const initialState = {
    loader: false,
    data: [],
    error: false,
};

const SendComment = (state = initialState, action) => {
    switch (action.type) {
        case Types.COMMENT_POST:
            return {
                ...state,
                loader: true,
            };
        case Types.COMMENT_SUCCESS:
            return {
                ...state,
                loader: false,
                data: action.payload,
            };
        case Types.COMMENT_ERROR:
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

export default SendComment;

import * as Types from '../constants/publishPost';

const initialState = {
    loader: false,
    data: [],
    error: false,
};

const PublishPost = (state = initialState, action) => {
    switch (action.type) {
        case Types.PUBLISH_POST:
            return {
                ...state,
                loader: true,
                sent: false
            };
        case Types.PUBLISH_SUCCESS:
            return {
                ...state,
                loader: false,
                data: action.payload,
                sent: true
            };
        case Types.PUBLISH_ERROR:
            return {
                ...state,
                loader: false,
                error: action.payload,
                sent: false
            };
        default:
            return {
                ...state,
            };
    }
};

export default PublishPost;

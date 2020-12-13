import * as Types from '../constants/publishPost';

export const sendPost = (title, body) => ({
    type: Types.PUBLISH_POST,
    payload: { body, title },
});

export const successSentPost = (response) => ({
    type: Types.PUBLISH_SUCCESS,
    payload: response,
});

export const errorSentPost = (error) => ({
    type: Types.PUBLISH_ERROR,
    payload: error,
});

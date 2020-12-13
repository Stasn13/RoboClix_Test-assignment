import * as Types from '../constants/sendComment';

export const sendComment = (id, body) => ({
    type: Types.COMMENT_POST,
    payload: { postId: id, body },
});

export const successSentComment = (response) => ({
    type: Types.COMMENT_SUCCESS,
    payload: response,
});

export const errorSentComment = (error) => ({
    type: Types.COMMENT_ERROR,
    payload: error,
});

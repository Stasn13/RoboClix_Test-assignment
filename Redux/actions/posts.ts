import * as Types from '../constants/posts';

export const fetch = () => ({
    type: Types.FETCH,
});

export const success = (posts) => ({
    type: Types.SUCCESS,
    payload: posts,
});

export const error = (error) => ({
    type: Types.SUCCESS,
    payload: error,
});

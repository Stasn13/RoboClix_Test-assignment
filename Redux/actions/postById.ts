import * as Types from '../constants/postById';

export const fetchById = (id) => ({
    type: Types.FETCH_BY_ID,
    payload: id,
});

export const successById = (post) => ({
    type: Types.SUCCESS_BY_ID,
    payload: post,
});

export const errorById = (error) => ({
    type: Types.SUCCESS_BY_ID,
    payload: error,
});

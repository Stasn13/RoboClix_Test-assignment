import { put, all, takeEvery, fork } from 'redux-saga/effects';
import api from '../../api/api';
import * as Actions from '../actions/postById';
import * as Types from '../constants/postById';

function* getPostById(action) {
    try {
        const response = yield api.get(`/posts/${action.payload}`, {
            params: {
                _embed: 'comments',
            },
        });
        yield put(Actions.successById(response.data));
    } catch (e) {
        yield put(Actions.errorById(e));
    }
}

function* watchPostById() {
    yield takeEvery(Types.FETCH_BY_ID, getPostById);
}

export default function* root() {
    yield all([fork(watchPostById)]);
}

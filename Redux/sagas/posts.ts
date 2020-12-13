import { put, all, takeEvery, fork, takeLatest } from 'redux-saga/effects';
import api from '../../api/api';
import * as Actions from '../actions/posts';
import * as Types from '../constants/posts';

function* getPosts() {
    try {
        const response = yield api.get('/posts');
        yield put(Actions.success(response.data));
    } catch (e) {
        yield put(Actions.error(e));
    }
}

function* watchPosts() {
    yield takeEvery(Types.FETCH, getPosts);
}

export default function* root() {
    yield all([fork(watchPosts)]);
}

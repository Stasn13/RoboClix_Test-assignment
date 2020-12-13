import { put, all, takeEvery, fork, takeLatest } from 'redux-saga/effects';
import api from '../../api/api';
import * as Actions from '../actions/publishPost';
import * as Types from '../constants/publishPost';

function* publishPost(action) {
    try {
        const response = yield api.post(`/posts`, action.payload);
        yield put(Actions.successSentPost(response.data));
    } catch (e) {
        yield put(Actions.errorSentPost(e));
    }
}

function* watchPublish() {
    yield takeEvery(Types.PUBLISH_POST, publishPost);
}

export default function* root() {
    yield all([fork(watchPublish)]);
}

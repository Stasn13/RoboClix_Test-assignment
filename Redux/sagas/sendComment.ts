import { put, all, takeEvery, fork, takeLatest } from 'redux-saga/effects';
import api from '../../api/api';
import * as Actions from '../actions/sendComment';
import * as Types from '../constants/sendComment';

function* sendComment(action) {
    try {
        const response = yield api.post(`/comments`, action.payload);
        yield put(Actions.successSentComment(response.data));
    } catch (e) {
        yield put(Actions.errorSentComment(e));
    }
}

function* watchComment() {
    yield takeEvery(Types.COMMENT_POST, sendComment);
}

export default function* root() {
    yield all([fork(watchComment)]);
}

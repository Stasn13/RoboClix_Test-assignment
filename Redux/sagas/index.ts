import { all } from 'redux-saga/effects';
import posts from './posts';
import postById from './postById';
import sendComment from './sendComment';
import publishPost from './publishPost';

export default function* root() {
    yield all([posts(), postById(), sendComment(), publishPost()]);
}

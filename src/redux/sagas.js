import { call, put, takeEvery } from 'redux-saga/effects';
import { hideLoader, showLoader, showAlert } from './actions';
import { FETCHED_POSTS, REQUEST_POSTS } from './types';

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaworker);
}

function* sagaworker() {
    try {
        yield put(showLoader());
        const payload = yield call(fetchPosts);
        yield put({ type: FETCHED_POSTS, payload })
        yield put(hideLoader());
    } catch (e) {
        yield put(showAlert('Something went wrong'));
        yield put(hideLoader());
    }
}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
    return await response.json();
}
import { put, takeLatest } from 'redux-saga/effects';

import ajax from '../apis';

function* fetchNews() {
  try {
    const json = yield ajax();

    yield put({type: "GET_NEWS_SUCCESS", json: json.articles});
  } catch (e) {
    yield put({type: "GET_NEWS_FAILURE", message: e.message});
  }
}

function* fetchNewsWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}

export default fetchNewsWatcher;

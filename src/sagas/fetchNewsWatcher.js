import { put, takeLatest } from 'redux-saga/effects';

import ajax from '../apis';

function* fetchNews() {
  const json = yield ajax();

  yield put({ type: "NEWS_RECEIVED", json: json.articles || [{ error: json.message }] });
}

function* fetchNewsWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}

export default fetchNewsWatcher;

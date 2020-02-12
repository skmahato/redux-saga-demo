import { all } from 'redux-saga/effects';

import fetchNewsWatcher from './fetchNewsWatcher';

export default function* rootSaga() {
  yield all([
    fetchNewsWatcher(),
  ]);
}

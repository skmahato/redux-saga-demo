import { createAction } from 'redux-actions';

import ajax from '../apis';

export const getNewsLoading = createAction('GET_NEWS_LOADING');
export const getNewsSuccess = createAction('GET_NEWS_SUCCESS');
export const getNewsFailure = createAction('GET_NEWS_FAILURE');

export const getNews = () => {
  return (dispatch) => {
    dispatch(getNewsLoading());

    return ajax()
    .then(data => dispatch(getNewsSuccess(data)))
    .catch(error => dispatch(getNewsFailure(error)));
  }
}

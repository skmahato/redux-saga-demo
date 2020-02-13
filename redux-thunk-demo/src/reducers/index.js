const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_NEWS_LOADING':
      return { ...state, loading: true };
    case 'GET_NEWS_SUCCESS':
      return { ...state, news: action.payload.articles[0], loading: false }
    case 'GET_NEWS_FAILURE':
      return { ...state, error: action.payload.response.error, loading: false }
    default:
      return state;
  }
};

export default reducer;

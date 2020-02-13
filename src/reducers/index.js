const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return { ...state, loading: true };
    case 'GET_NEWS_SUCCESS':
      return { ...state, news: action.json[0], loading: false }
    case 'GET_NEWS_FAILURE':
      return { ...state, error: action.message, loading: false }
    default:
      return state;
  }
};

export default reducer;

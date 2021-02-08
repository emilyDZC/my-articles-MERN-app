export default (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case "ADD_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case "FILTER_POSTS":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "POST_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "GET_TOPICS":
      return {
        ...state,
        topics: [...new Set(action.payload.map((post) => post.topic))],
      };
    default:
      return state;
  }
};

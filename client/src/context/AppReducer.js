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
    case "UPDATE_POST":
      return {
        ...state,
        posts: [
          action.payload,
          ...state.posts.filter((post) => post._id !== action.payload._id),
        ],
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
    case "GET_MUSIC":
      return {
        ...state,
        loading: false,
        musicEntries: action.payload,
      };
    case "ADD_MUSIC_ENTRY":
      return {
        ...state,
        musicEntries: [action.payload, ...state.musicEntries],
      };
    case "ADD_GARDEN_TODO":
      return {
        ...state,
        gardenTodos: [action.payload, ...state.musicEntries],
      };
    case "GET_GARDEN_TODOS":
      return {
        ...state,
        loading: false,
        gardenTodos: action.payload,
      };
    default:
      return state;
  }
};

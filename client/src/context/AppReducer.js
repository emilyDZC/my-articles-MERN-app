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
    case "ADD_PLANT":
      return {
        ...state,
        plants: [action.payload, ...state.plants],
      };
    case "GET_PLANTS":
      return {
        ...state,
        loading: false,
        plants: action.payload,
      };
    case "UPDATE_PLANT":
      return {
        ...state,
        plants: [
          action.payload,
          ...state.plants.filter((plant) => plant._id !== action.payload._id),
        ],
      };
    default:
      return state;
  }
};

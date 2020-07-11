import { postsActionTypes } from '../Actions/postAction';

const initialPosts = {
  posts: [],
};

const postsReducer = (state = initialPosts, action) => {
  switch (action.type) {
    case postsActionTypes.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case postsActionTypes.REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

export default postsReducer;

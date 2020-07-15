import { postsActionTypes } from '../Actions/postAction';

const initialPosts = {
  posts: [],
  isFetching: false,
  errMsg: '',
};

const postsReducer = (state = initialPosts, action) => {
  switch (action.type) {
    case postsActionTypes.FETCH_POSTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case postsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.map((post) => post),
        isFetching: false,
      };
    case postsActionTypes.FETCH_POSTS_FAILED:
      return {
        ...state,
        isFetching: false,
        err: 'Something went wrong with fetching the data',
      };
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

import { getData } from '../../firebase/firebase';

export const postsActionTypes = {
  ADD_POST: 'ADD_POST',
  REMOVE_POST: 'REMOVE_POST',
  FETCH_POSTS_START: 'FETCH_POSTS_START',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_FAILED: 'FETCH_POSTS_FAILED',
};

export const addPost = (post) => ({
  type: postsActionTypes.ADD_POST,
  payload: post,
});
export const removePost = (id) => {
  return {
    type: postsActionTypes.REMOVE_POST,
    payload: id,
  };
};

// USE WITH THUNK

export const fetchPostsSuccsses = (posts) => ({
  type: postsActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsStart = () => ({
  type: postsActionTypes.FETCH_POSTS_START,
});

export const fetchPostsFailed = (err) => ({
  type: postsActionTypes.FETCH_POSTS_FAILED,
  payload: err,
});

export const fetchPostsAsync = () => {
  return (dispatch) => {
    dispatch(fetchPostsStart());
    try {
      console.log('im here>');
      getData('posts')
        .limitToLast(20)
        .once('value', (snapshot) => {
          console.log('im herer2');
          let posts = [];
          snapshot.forEach((snapPost) => {
            posts.push(snapPost);
          });
          dispatch(fetchPostsSuccsses(posts));
        });
    } catch (err) {
      dispatch(fetchPostsFailed(err));
    }
  };
};

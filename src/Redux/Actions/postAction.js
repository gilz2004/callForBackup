export const postsActionTypes = {
  ADD_POST: 'ADD_POST',
  REMOVE_POST: 'REMOVE_POST',
  UPDATE_POSTS: 'UPDATE_POSTS',
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

export const updatePosts = (posts) => ({
  type: postsActionTypes.UPDATE_POSTS,
  payload: posts,
});

export const postsActionTypes = {
  ADD_POST: 'ADD_POST',
};

export const addPost = (post) => ({
  type: postsActionTypes.ADD_POST,
  payload: post,
});

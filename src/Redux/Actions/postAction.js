export const postsActionTypes = {
  ADD_POST: 'ADD_POST',
  REMOVE_POST: 'REMOVE_POST',
};

export const addPost = (post) => ({
  type: postsActionTypes.ADD_POST,
  payload: post,
});
export const removePost = (id) => {
  console.log(id, 'im id');
  return {
    type: postsActionTypes.REMOVE_POST,
    payload: id,
  };
};

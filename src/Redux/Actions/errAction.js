export const errActionTypes = {
  ADD_ERROR: 'ADD_ERROR',
  REMOVE_ERROR: 'REMOVE_ERROR',
};

export const addErr = (err) => ({
  type: errActionTypes.ADD_ERROR,
  payload: err,
});

import { errActionTypes } from '../Actions/errAction';
const initialErr = { msg: '' };

export const errReducer = (state = initialErr, action) => {
  switch (action.type) {
    case errActionTypes.ADD_ERROR:
      return {
        ...state,
        msg: action.payload,
      };
    default:
      return state;
  }
};

import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import { errReducer } from './errReducer';

const rootReducer = combineReducers({
  callsForHelp: postsReducer,
  err: errReducer,
});

export default rootReducer;

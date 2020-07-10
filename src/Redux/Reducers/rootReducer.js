import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  callsForHelp: postsReducer,
});

export default rootReducer;

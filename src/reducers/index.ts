import { combineReducers } from 'redux';

import words from './words';
import stats from './stats';

export default combineReducers({
  words,
  stats,
});

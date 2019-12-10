import { combineReducers } from 'redux';
import tipReducer from './tipReducer';
import tagReducer from './tagReducer';

export default combineReducers({
  tips: tipReducer,
  tags: tagReducer,
});

import { combineReducers } from 'redux';
import user from './user';
import repos from './repos';
import details from './details';
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
  routing: routerReducer,
  user,
  repos,
  details,
});

export default reducers;

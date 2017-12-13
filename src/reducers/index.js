import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { games } from './games.reducer';
import { categories } from './categories.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  games,
  categories
});

export default rootReducer;
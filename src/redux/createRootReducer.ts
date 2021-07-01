import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, Reducer } from 'redux';

import { reducer as users } from '../pages/HomePage/redux';
import { reducer as posts } from '../pages/UserPage/redux';

export const createRootReducer =
  (history: History) => (state: any, action: any) => {
    return combineReducers({
      router: connectRouter(history),
      users,
      posts,
    })(state, action);
  };

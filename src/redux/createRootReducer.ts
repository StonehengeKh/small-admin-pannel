import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, Reducer } from 'redux';

import { reducer as users } from '../pages/ListPage/redux';
import { reducer as posts } from '../pages/UserPage/redux';
import { reducer as projects } from '../pages/TrackerPage/redux';

export const createRootReducer =
  (history: History) => (state: any, action: any) => {
    return combineReducers({
      router: connectRouter(history),
      users,
      posts,
      projects,
    })(state, action);
  };

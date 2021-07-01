import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { createRootReducer } from './createRootReducer';
import rootSaga from './saga';

export const history = createBrowserHistory();
const rootReducer = createRootReducer(history);

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      // alertsMiddleware,
      // listenersMiddleware,
      // errorsMiddleware,
      sagaMiddleware,
      routerMiddleware(history),
    ),
  ),
);

sagaMiddleware.run(rootSaga);

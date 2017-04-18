import { createStore, applyMiddleware, compose } from 'redux';
import thunk        from 'redux-thunk';
import StockApp     from '../reducers';
import createLogger from 'redux-logger';
import DevTools     from '../web/containers/DevTools';

const createDevStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore);

export default function configureStore() {
  const store = createDevStoreWithMiddleware(StockApp);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
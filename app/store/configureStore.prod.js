import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import StockApp from '../reducers'

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

export default function configureStore() {
    return createStoreWithMiddleware(StockApp);
}
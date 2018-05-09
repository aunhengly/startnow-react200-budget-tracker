import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from './rootReducer';

// function tempReducer () {
//     return null;
// }

const rootStore = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default rootStore;
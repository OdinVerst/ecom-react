import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import rootReduser from './rootReducer';

const middleware = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReduser, 
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

export const persistore = persistStore(store);

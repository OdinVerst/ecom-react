import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga'

import rootReduser from './rootReducer';
import {startFetchingCollectionsAsync} from "./shop/shopSagas";

const sagas = createSagaMiddleware();
const middleware = [sagas];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReduser, 
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

sagas.run(startFetchingCollectionsAsync);

export const persistore = persistStore(store);

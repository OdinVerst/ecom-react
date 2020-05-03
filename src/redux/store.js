import { createStore, compose, applyMiddleware } from "redux";
import rootReduser from "./rootRedusr";

const middleware = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReduser, 
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

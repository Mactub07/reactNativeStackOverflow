import { applyMiddleware } from 'redux';
import fetch from './fetch.middleware.js';
import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable';

const loggerConfig = {
    stateTransformer: state => {
        const newState = {};

        for (const i of Object.keys(state)) {
            if (Iterable.isIterable(state[i])) {
                newState[i] = state[i].toJS();
            } else {
                newState[i] = state[i];
            }
        }

        return newState;
    }
};

const middleware = [
    fetch,
    __DEV__ && createLogger(loggerConfig)
].filter(Boolean);

export default applyMiddleware(...middleware);

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import allSagas from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

interface ReduxProps {
    children?: any;
}

const initialState = {};
const saga = createSagaMiddleware();
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(saga)));
saga.run(allSagas);

const Redux = (props: ReduxProps) => {
    return <Provider store={store}>{props.children}</Provider>;
};

export default Redux;

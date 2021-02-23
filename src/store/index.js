import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './rootReducer';
import rootSaga from './rootSaga';
import * as globalActions from './rootActions';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState = {}) => {
    return createStore(
        createReducer(),
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                sagaMiddleware
            )
        )
    );
};

export default configureStore();

sagaMiddleware.run(rootSaga, {
    globalActions
});

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();

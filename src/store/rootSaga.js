import {call} from "@redux-saga/core/effects";

import weatherSaga from './weather/saga';
import currencySaga from './currency/saga';

export default function* rootSagaWatcher(props) {
    yield call(weatherSaga, props);
    yield call(currencySaga, props);
}
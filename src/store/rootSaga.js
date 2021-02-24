import {call, put} from "@redux-saga/core/effects";
import { fork } from 'redux-saga/effects';
import apiMethods from "../api/apiMethods";
import {setCityList} from "./rootActions";

import weatherSaga from './weather/saga';
import currencySaga from './currency/saga';

const sagas = [
    weatherSaga,
    currencySaga
]

function* fetchCitiesList(props) {
    const {globalActions: {setLoading, enqueueSnackbar}} = props;
    yield setLoading(true)
    try {
        const data = yield call(apiMethods.getCities, "all", {fields: "name"});
        yield put(setCityList(data));
        yield put(setLoading(false));
    } catch (error) {
        console.log(error)
        yield put(enqueueSnackbar({
            message: error.message,
            options: {variant: 'error'},
        }));
    }
}

export default function* rootSagaWatcher(props) {
    yield call(fetchCitiesList, props)

    yield fork(weatherSaga, props)
    yield fork(currencySaga, props)
}
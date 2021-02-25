import {all, call, fork, put} from 'redux-saga/effects';
import apiMethods from "../api/apiMethods";
import {setCityList} from "./rootActions";

import weatherSaga from './weather/saga';

function* fetchCitiesList(props) {
    const {globalActions: {setLoading, enqueueSnackbar}} = props;
    yield setLoading(true)
    try {
        const {data} = yield call(apiMethods.getCities, "countries/population/cities");
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

    yield all([
        fork(weatherSaga, props)
    ])
}
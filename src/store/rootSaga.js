import {call, put} from "@redux-saga/core/effects";
import weatherSaga from './weather/saga';
import currencySaga from './currency/saga';
import apiMethods from "../api/apiMethods";
import {setCityList} from "./rootActions";

function* fetchCityList(props) {
    const {globalActions: {setLoading, enqueueSnackbar}} = props;
    yield setLoading(true)

    try {

        const {data} = yield call(apiMethods.get, "all", {fields:"name"});
        yield put(setCityList(data));
        yield put(setLoading(false));
    } catch (error) {

        yield put(enqueueSnackbar({
            message: error.toString(),
            options: {variant: 'error'},
        }));
    }
}

export default function* rootSagaWatcher(props) {
    yield call(fetchCityList,props)

    yield call(weatherSaga, props);
    yield call(currencySaga, props);
}
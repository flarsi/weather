import {call, put, takeLatest} from "redux-saga/effects";
import apiMethods from "../../api/apiMethods";
import {FETCH_WEATHER} from "./actions/actionTypes";
import {setWeather} from "./actions";

const RESOURCE = 'forecast';

function* fetchWeather(props, {payload: city}) {
    const {globalActions: {enqueueSnackbar, setLoading}} = props;
    yield setLoading(true)
    try {
        const data = yield call(apiMethods.get, RESOURCE, {q: city, appid: process.env.REACT_APP_WEATHER_API_KEY});
        yield put(setWeather(data));
        yield setLoading(false)
    } catch (error) {
        yield put(enqueueSnackbar({
            message: error.toString(),
            options: {variant: 'error'},
        }));
    }
}

function* fetchFavoriteWeather(props) {
    const {globalActions: {enqueueSnackbar, setLoading}} = props;
    yield setLoading(true)
    try {
        const data = yield call(apiMethods.get, RESOURCE, {q: "London", appid: process.env.REACT_APP_WEATHER_API_KEY});
        yield put(setWeather(data));
        yield setLoading(false)
    } catch (error) {
        yield put(enqueueSnackbar({
            message: error.toString(),
            options: {variant: 'error'},
        }));
    }
}

export default function* sagaWatcher(props) {
    yield call(fetchFavoriteWeather, props);
    yield takeLatest(FETCH_WEATHER, fetchWeather, props);
}

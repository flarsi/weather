import { call, put, select, takeLatest } from "redux-saga/effects";
import { get, isObject } from 'lodash'
import apiMethods from "../../api/apiMethods";
import {LOAD_WEATHER} from "./actions/actionTypes";

const RESOURCE = 'weather';

function* fetchFavoriteWeather(props) {
  // const { globalActions: { enqueueSnackbar } } = props;
  //
  // try {
  //   if (id) {
  //     const { data } = yield call(apiMethods.get, `${RESOURCE}/${id}`);
  //
  //     yield put(setItem(data));
  //   } else {
  //     yield put(setItem({ active: true }));
  //   }
  // } catch (error) {
  //   yield put(enqueueSnackbar({
  //     message: error.toString(),
  //     options: { variant: 'error' },
  //   }));
  // }
}


function* fetchWeather(props, { payload }) {
  // const { globalActions: { enqueueSnackbar } } = props;
  //
  // try {
  //   if (id) {
  //     const { data } = yield call(apiMethods.get, `${RESOURCE}/${id}`);
  //
  //     yield put(setItem(data));
  //   } else {
  //     yield put(setItem({ active: true }));
  //   }
  // } catch (error) {
  //   yield put(enqueueSnackbar({
  //     message: error.toString(),
  //     options: { variant: 'error' },
  //   }));
  // }
}

export default function* sagaWatcher(props) {
  yield call(fetchFavoriteWeather, props);

  yield takeLatest(LOAD_WEATHER, fetchWeather, props);
}

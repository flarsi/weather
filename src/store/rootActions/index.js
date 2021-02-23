import { setLoading } from '../../modules/loadingManager/actions'
import { enqueueSnackbar, closeSnackbar, removeSnackbar } from '../../modules/notifier/actions'
import {SET_CITY_LIST, SET_LOAD} from "./actionTypes";

export const setLoad = payload => ({
  type: SET_LOAD,
  payload: payload
});

export const setCityList = payload => ({
  type: SET_CITY_LIST,
  payload: payload
});

export {
  setLoading,
  enqueueSnackbar,
  closeSnackbar,
  removeSnackbar
};
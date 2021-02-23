import {LOAD_CURRENCY_RATE, SET_CURRENCY_RATE} from "./actionTypes";

export const setCurrencyRate = payload => ({
    type: SET_CURRENCY_RATE,
    payload: payload
});

export const loadCurrencyRate = payload => ({
  type: LOAD_CURRENCY_RATE,
  payload: payload
});
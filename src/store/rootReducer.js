import {SET_CITY_LIST, SET_LOAD} from "./rootActions/actionTypes";

import loadingManagerReducer from '../modules/loadingManager/reducer';
import notifications from '../modules/notifier/reducer';

import weatherReducer from "./weather/reducer";
import currencyReducer from "./currency/reducer";

import {combineReducers} from "redux";

const initialState = {
    load: true,
    cityList: []
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOAD:
            return {
                ...state,
                load: payload
            };
        case SET_CITY_LIST:
            return {
                ...state,
                cityList: payload
            };
        default:
            return state;
    }
}

const createReducer = () => combineReducers({
    loadingManager: loadingManagerReducer,
    notifications,
    weatherReducer,
    currencyReducer,
    rootReducer
})

export default createReducer

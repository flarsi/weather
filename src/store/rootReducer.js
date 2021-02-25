import {SET_CITY_LIST, SET_LOAD} from "./rootActions/actionTypes";

import loadingManagerReducer from '../modules/loadingManager/reducer';
import notifications from '../modules/notifier/reducer';

import weather from "./weather/reducer";

import {combineReducers} from "redux";

const initialState = {
    load: true,
    cityList: []
};

const city = (state = initialState, { type, payload }) => {
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
    city,
    loadingManager: loadingManagerReducer,
    notifications,
    weather,
})

export default createReducer

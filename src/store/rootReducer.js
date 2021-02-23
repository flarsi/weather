import {SET_LOAD} from "./rootActions/actionTypes";

import weatherReducer from "./weather/reducer";
import currencyReducer from "./currency/reducer";
import {combineReducers} from "redux";

const initialState = {
    load: true
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOAD:
            return {
                ...state,
                load: payload
            };

        default:
            return state;
    }
}

const createReducer = () => combineReducers({
    weatherReducer,
    currencyReducer,
    rootReducer
})

export default createReducer

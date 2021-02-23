import {LOAD_WEATHER, SET_WEATHER} from "./actionTypes";

export const setWeather = payload => ({
    type: SET_WEATHER,
    payload: payload
});

export const loadWeather = payload => ({
    type: LOAD_WEATHER,
    payload: payload
});

// export const setLoad = payload => ({
//   type: SET_LOAD,
//   payload: payload
// });
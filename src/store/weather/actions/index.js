import {FETCH_WEATHER, SET_WEATHER} from "./actionTypes";

export const setWeather = payload => ({
    type: SET_WEATHER,
    payload: payload
});

export const fetchWeather = city => ({
    type: FETCH_WEATHER,
    payload: city
});

// export const setLoad = payload => ({
//   type: SET_LOAD,
//   payload: payload
// });
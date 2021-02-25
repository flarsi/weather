import {FETCH_WEATHER, SET_FULL_WEATHER, SET_WEATHER_PERIOD} from "./actionTypes";

export const setWeather = payload => ({
    type: SET_WEATHER_PERIOD,
    payload: payload
});

export const setFullWeather = payload => ({
    type: SET_FULL_WEATHER,
    payload: payload
});

export const fetchWeather = city => ({
    type: FETCH_WEATHER,
    payload: city
});


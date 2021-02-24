import {FETCH_WEATHER, SET_FAVORITE_WEATHER, SET_WEATHER} from "./actions/actionTypes";

const initialState = {
  fetching: true,
  item: {},
  favorite:[]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_WEATHER:
      return {
        ...state,
        fetching: true
      };
    case SET_WEATHER:
      return {
        ...state,
        fetching: false,
        item: payload
      };
    case SET_FAVORITE_WEATHER:
      return {
        ...state,
        favorite: payload
      };
    default:
      return state;
  }
};

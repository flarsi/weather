import {FETCH_WEATHER, SET_WEATHER} from "./actions/actionTypes";

const initialState = {
  fetching: true,
  item: {}
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
    default:
      return state;
  }
};

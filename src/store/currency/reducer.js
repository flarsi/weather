import {LOAD_CURRENCY_RATE, SET_CURRENCY_RATE} from "./actions/actionTypes";

const initialState = {
  fetching: true,
  item: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CURRENCY_RATE:
      return {
        ...state,
        fetching: true
      };
    case SET_CURRENCY_RATE:
      return {
        ...state,
        fetching: false,
        item: payload
      };
    default:
      return state;
  }
};

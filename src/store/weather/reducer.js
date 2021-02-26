import {FETCH_WEATHER, SET_FULL_WEATHER, SET_WEATHER_PERIOD} from "./actions/actionTypes";

const initialState = {
  fetching: false,
  item: {
    period: {},
    full: {}
  },
};

 const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_WEATHER:
      return {
        ...state,
        fetching: true
      };
    case SET_FULL_WEATHER:
      return {
        ...state,
        item: {...state.item,
          full: payload
        }
      };
    case SET_WEATHER_PERIOD:
      return {
        ...state,
        fetching: false,
        item: {...state.item,
        period: payload
        }
      };
    default:
      return state;
  }
};

export default reducer
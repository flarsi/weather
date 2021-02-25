
const initialState = {
  loading: false
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: payload
      };
    default:
      return {
        ...state
      }
  }
};

export default reducer
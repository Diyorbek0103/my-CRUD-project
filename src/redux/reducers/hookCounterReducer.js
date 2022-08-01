import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
  loading: false,
  count: 0,
};

export const hookCounterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.LOADING_TRUE:
      return { ...state, loading: true };
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + payload,
        loading: false,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - payload,
        loading: false,
      };
    case actionTypes.RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

import { actionTypes } from "../actionTypes/actionTypes";

export const hookIncrementAction = (value) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING_TRUE,
  });
  try {
    dispatch({
      type: actionTypes.INCREMENT,
      payload: value,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOADING_FALSE,
    });
  }
};

export const hookDecrementAction = (value) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING_TRUE,
  });
  try {
    dispatch({
      type: actionTypes.DECREMENT,
      payload: value,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOADING_FALSE,
    });
  }
};

export const hookResetAction = () => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING_TRUE,
  });
  try {
    dispatch({
      type: actionTypes.RESET,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOADING_FALSE,
    });
  }
};

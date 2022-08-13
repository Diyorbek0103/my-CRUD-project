import axios from "axios";
import { toast } from "react-toastify";
import { PATH_NAME } from "../../tools/constants";
import { actionTypes } from "../actionTypes/actionTypes";

export const getEmployees = () => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING_TRUE,
  });

  try {
    const res = await axios.get(`${PATH_NAME}/api/employee`);

    dispatch({
      type: actionTypes.GET_EMPLOYEES,
      payload: res.data.object,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.LOADING_FALSE,
    });
  }
};

export const addEmployees = (data, handleClose) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING_TRUE,
  });

  try {
    const res = await axios.post(`${PATH_NAME}/api/employee`, data);
    handleClose();

    toast.success(`${res.data.message}`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

    dispatch(getEmployees());
  } catch (err) {
    dispatch({
      type: actionTypes.LOADING_FALSE,
    });
    toast.error(err.message, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

export const setDeleteEmployeeId = (employeeID) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.SET_DELETE_EMPLOYEE_ID,
      payload: {
        employeeID,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const setUpdateEmployeeId = (employeeID) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.SET_UPDATE_EMPLOYEE_ID,
      payload: {
        employeeID,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteEmployee = (employeeID, handleClose) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING_TRUE,
  });

  try {
    const res = await axios.delete(`${PATH_NAME}/api/employee/${employeeID}`);

    handleClose();

    toast.success(`${res.data.message}`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

    dispatch(getEmployees());
  } catch (err) {
    dispatch({
      type: actionTypes.LOADING_FALSE,
    });
    toast.error(err.message, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

export const updateEmployee = (employeeID, handleClose, data) => async (dispatch) => {
    dispatch({
      type: actionTypes.LOADING_TRUE,
    });

    try {
      const res = await axios.put(
        `${PATH_NAME}/api/employee/${employeeID}`,
        data
      );

      handleClose();

      toast.warning(`${res.data.message}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      dispatch(getEmployees());
    } catch (err) {
      dispatch({
        type: actionTypes.LOADING_FALSE,
      });
      toast.error(err.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
};

export const FilteringEmployee = (filterData) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING_TRUE,
  });

  try {
    dispatch({
      type: actionTypes.FILTERING_EMPLOYEE,
      payload: filterData,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.LOADING_FALSE,
    });
    toast.error(err.message, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
  employees: [],
  staticEmployees: [],
  delete_employee: null,
  update_employee: null,
  loading: false,
};

export const employeesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case actionTypes.LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.GET_EMPLOYEES:
      return {
        ...state,
        employees: payload,
        staticEmployees: payload,
        loading: false,
      };

    case actionTypes.SET_DELETE_EMPLOYEE_ID:
      return {
        ...state,
        delete_employee: state.employees.find(
          (item) => item.id === payload.employeeID
        ),
      };

    case actionTypes.SET_UPDATE_EMPLOYEE_ID:
      return {
        ...state,
        update_employee: state.employees.find(
          (item) => item.id === payload.employeeID
        ),
      };

    case actionTypes.REMOVE_DELETE_EMPLOYEE:
      return {
        ...state,
        delete_employee: null,
      };

    case actionTypes.REMOVE_UPDATE_EMPLOYEE:
      return {
        ...state,
        update_employee: null,
      };

    case actionTypes.FILTERING_EMPLOYEE:
      return {
        ...state,
        employees: payload,
        loading: false,
      };

    default:
      return state;
  }
};

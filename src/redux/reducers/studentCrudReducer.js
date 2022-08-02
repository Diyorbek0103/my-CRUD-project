import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
  loading: false,
  studentData: [
    {
      firstname: "Diyorbek",
      lastname: "Tojiqulov",
      age: 20,
      edutype: "Grand",
    },
    {
      firstname: "Ismoil",
      lastname: "Ganiev",
      age: 19,
      edutype: "Kontrakt",
    },
    {
      firstname: "Jonibek",
      lastname: "Iskandarov",
      age: 18,
      edutype: "Kontrakt",
    },
  ],
};

export const studentCrudReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.LOADING_TRUE:
      return { ...state, loading: true };
    case actionTypes.DELETE:
      return {
        ...state,
        studentData: state.studentData,
      };
    case actionTypes.ADD_STUDENT:
      return {
        ...state,
        studentData: state.studentData,
      };
    default:
      return state;
  }
};

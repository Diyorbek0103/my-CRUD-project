import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
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
  loading: true,
  delete_student: null,
  delete_student_index: null,

  edit_student: null,
  edit_student_index: null,
};

export const studentCrudReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.LOADING_TRUE:
      return { ...state, loading: true };

    case actionTypes.LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.ADD_STUDENT:
      let newStudentData = [...state.studentData, payload];
      return {
        ...state,
        studentData: newStudentData,
      };

    case actionTypes.DELETE_STUDENT_INDEX:
      return {
        ...state,
        delete_student_index: payload,
        delete_student: state.studentData[payload],
      };

    case actionTypes.REMOVE_STUDENT_DATA:
      return {
        ...state,
        delete_student: null,
        delete_student_index: null,
        loading: false,
      };

    case actionTypes.DELETE_STUDENT:
      let newDeleteStudentData = [...state.studentData];
      newDeleteStudentData.splice(payload, 1);
      return {
        ...state,
        studentData: newDeleteStudentData,
        loading: false,
      };

    case actionTypes.EDIT_STUDENT_INDEX:
      return {
        ...state,
        edit_student: state.studentData[payload],
        edit_student_index: payload,
      };

    // case actionTypes.REMOVE_STUDENT_DATA_EDIT:
    //   return {
    //     ...state,
    //     edit_student: null,
    //     edit_student_index: null,
    //     loading: false,
    //   };

    case actionTypes.EDIT_STUDENT:
      let neweditdata = [...state.studentData];
      neweditdata[payload.editIndex] = payload.newData;
      return {
        ...state,
        studentData: neweditdata,
        loading: false,
      };

    default:
      return state;
  }
};

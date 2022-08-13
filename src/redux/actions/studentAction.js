import { toast } from "react-toastify";
import { actionTypes } from "../actionTypes/actionTypes";

export const addstudentAction = (newObj) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING_TRUE,
  });
  try {
    dispatch({
      type: actionTypes.ADD_STUDENT,
      payload: newObj,
    });

    toast.success("Talaba qoshildi",{
      position:toast.POSITION.BOTTOM_RIGHT
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOADING_FALSE,
    });
  }
};

export const deleteStudentAction = (index) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING_TRUE,
  });
  try {
    dispatch({
      type: actionTypes.DELETE_STUDENT_INDEX,
      payload: index,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOADING_FALSE,
    });
  }
};

export const delete_Student_Action = (index) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING_TRUE,
  });
  try {
    dispatch({
      type: actionTypes.DELETE_STUDENT,
      payload: index,
    });

    dispatch({
      type: actionTypes.REMOVE_STUDENT_DATA,
    });

    toast.success("Talaba muvofaqiyatli o;chirildi",{
      position:toast.POSITION.BOTTOM_RIGHT
    });
  } catch (error) {
    toast.error("Talaba o'chirilmadi");
    dispatch({
      type: actionTypes.LOADING_FALSE,
    });
  }
};

export const editStudentAction = (index) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING_TRUE,
  });
  try {
    dispatch({
      type: actionTypes.EDIT_STUDENT_INDEX,
      payload: index,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOADING_FALSE,
    });
  }
};

export const setEditStudentAction =
  (newData, editIndex) => async (dispatch) => {
    dispatch({
      type: actionTypes.LOADING_TRUE,
    });
    try {
      dispatch({
        type: actionTypes.EDIT_STUDENT,
        payload: {
          editIndex,
          newData,
        },
      });

      // dispatch({
      //   type: actionTypes.REMOVE_STUDENT_DATA_EDIT,
      // });

      toast.warning("Ma'lumot yangilandi",{
        position:toast.POSITION.BOTTOM_RIGHT
      });
    } catch (error) {
      toast.error("Ma'lumot yangilanmadi");
      dispatch({
        type: actionTypes.LOADING_FALSE,
      });
    }
  };


  
export const filterStudentAction = (filteringData) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING_TRUE,
  });
  try {
    dispatch({
      type: actionTypes.FILTER_STUDENT,
      payload: filteringData,
    });

  } catch (error) {
    dispatch({
      type: actionTypes.LOADING_FALSE,
    });
  }
};
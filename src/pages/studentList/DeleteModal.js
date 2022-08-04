import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delete_Student_Action } from "../../redux/actions/studentAction";
import { actionTypes } from "../../redux/actionTypes/actionTypes";

const DeleteModal = () => {
  const dispatch = useDispatch();

  const { delete_student, delete_student_index } = useSelector(
    (state) => state.studentCrudReducer
  );

  const onConfirm = () => {
    dispatch(delete_Student_Action(delete_student_index));
  };

  const removeStudent = () => {
    dispatch({
      type: actionTypes.REMOVE_STUDENT_DATA,
    });
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal_delete"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Talabani o'chirish
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={removeStudent}
              ></button>
            </div>
            <div className="modal-body">
              Siz haqiqatdan ham ushbu{" "}
              <b>
                {delete_student?.firstname} {delete_student?.lastname}
              </b>{" "}
              nomli talabani o'chirmoqchimisiz !!!
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <button
                style={{ width: "200px" }}
                onClick={removeStudent}
                type="button"
                className="btn btn-success "
                data-bs-dismiss="modal"
              >
                Yo'q
              </button>
              <button
                style={{ width: "200px" }}
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onConfirm}
                type="button"
                className="btn btn-danger "
              >
                Ha
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

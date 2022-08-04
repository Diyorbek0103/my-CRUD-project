import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEditStudentAction } from "../../redux/actions/studentAction";
// import { actionTypes } from "../../redux/actionTypes/actionTypes";
const EditModal = () => {
  const { edit_student_index, edit_student } = useSelector(
    (state) => state.studentCrudReducer
  );
  const dispatch = useDispatch();

  //   const removeStudent = () => {
  //     dispatch({
  //       type: actionTypes.REMOVE_STUDENT_DATA_EDIT,
  //     });
  //   };

  const myForm = useRef(null);

  if (edit_student) {
    myForm.current.firstname.value = edit_student.firstname;
    myForm.current.lastname.value = edit_student.lastname;
    myForm.current.age.value = edit_student.age;
    myForm.current.edutype.value = edit_student.edutype;
  }
  const submitEditData = (e) => {
    e.preventDefault();
    const editData = {
      firstname: myForm.current.firstname.value,
      lastname: myForm.current.lastname.value,
      age: myForm.current.age.value,
      edutype: myForm.current.edutype.value,
    };
    dispatch(setEditStudentAction(editData, edit_student_index));
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModaledit"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <form onSubmit={submitEditData} ref={myForm}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">
                  Talabani tahrirlash
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  placeholder="Ismingizni kriting..."
                  name="firstname"
                  className="form-control mb-2"
                  type="text"
                />
                <input
                  placeholder="Familiyangizni kriting..."
                  name="lastname"
                  className="form-control mb-2"
                  type="text"
                />
                <input
                  placeholder="Yoshingizni kriting..."
                  name="age"
                  className="form-control mb-2"
                  type="number"
                />
                <select className="form-control" name="edutype">
                  <option value="">O'qish turi</option>
                  <option value="Grand">Grand</option>
                  <option value="Kontrakt">Kontrakt</option>
                </select>
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <button
                  style={{ width: "200px" }}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Yopish
                </button>

                <button
                  //   onClick={removeStudent}
                  style={{ width: "200px" }}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  type="submit"
                  className="btn btn-success"
                >
                  Saqlash
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;

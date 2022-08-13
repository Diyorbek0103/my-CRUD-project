import React from "react";
import {  useDispatch } from "react-redux";
import { addstudentAction } from "../../redux/actions/studentAction";
import { toast } from "react-toastify";

const Modal = () => {
  const dispatch = useDispatch();

  const saveStudent = (e) => {
    e.preventDefault();
    const newObj = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      age: e.target.age.value,
      edutype: e.target.edutype.value,
    };
    if (
      e.target.firstname.value !== "" &&
      e.target.lastname.value !== "" &&
      e.target.age.value !== "" &&
      e.target.edutype.value !== ""
    ) {
      dispatch(addstudentAction(newObj));
    } else {
      toast.error("Formani to'ldirng !!!",{
        position:toast.POSITION.BOTTOM_RIGHT
      });
    }
    e.target.reset();
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <form onSubmit={saveStudent}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">
                  Talaba qo'shish
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
                  style={{ width: "200px" }}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  type="submit"
                  className="btn btn-success"
                >
                  Qoshish
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

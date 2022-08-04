import React from "react";
import Layout from "../../components/layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal";
import DeleteModal from "./DeleteModal";
import {
  deleteStudentAction,
  editStudentAction,
} from "../../redux/actions/studentAction";
import EditModal from "./EditModal";

const StudentList = () => {
  const dispatch = useDispatch();

  const { studentData } = useSelector((state) => state.studentCrudReducer);

  const deleteStudentFunction = (index) => {
    dispatch(deleteStudentAction(index));
  };

  const editStudentFunction = (index) => {
    dispatch(editStudentAction(index));
  };

  return (
    <Layout>
      <div className="row">
        <div className="header">
          <h2>Student-List</h2>
          <div>
            <input
              placeholder="Qidirish"
              name="input"
              className="form-control"
              type="text"
            />
          </div>
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-success"
          >
            Talaba qo'shish<i className="ms-2 bi bi-person-plus-fill"></i>
          </button>
        </div>
        <div className="col-xl-12">
          <table className="table table-bordered table-dark text-center table-hover">
            <thead>
              <tr className="table-secondary">
                <th>№</th>
                <th>Ismi</th>
                <th>Familiyasi</th>
                <th>Yoshi</th>
                <th>O'qish turi</th>
                <th>Amallar</th>
              </tr>
            </thead>
            <tbody>
              {studentData && studentData.length > 0 ? (
                studentData.map((student, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{student.firstname}</td>
                    <td>{student.lastname}</td>
                    <td>{student.age}</td>
                    <td>
                      <p
                        className={
                          student.edutype === "Kontrakt"
                            ? "bg-warning"
                            : "bg-success"
                        }
                      >
                        {student.edutype}
                      </p>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteStudentFunction(index)}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal_delete"
                        className="btn btn-danger"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                      <button
                        onClick={() => editStudentFunction(index)}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModaledit"
                        className="btn btn-warning ms-5"
                      >
                        <i className="bi bi-pen"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>
                    <h3>Malumot mavjud emas</h3>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Modal />
      <DeleteModal />
      <EditModal />
    </Layout>
  );
};

export default StudentList;

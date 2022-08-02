import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import "./studentList.scss";
import { deleteAction } from "../../redux/actions/studentAction";
import { toast } from "react-toastify";

import Modal from "./Modal";
const StudentList = () => {
  const { studentData } = useSelector((state) => state.studentCrudReducer);
  const dispatch = useDispatch();

  const deleteFunction = (index) => {
    studentData.splice(index, 1);
    dispatch(deleteAction());
    toast.success("Muvofaqiyoatli o'chirildi");
  };

  return (
    <Layout>
      <Modal />
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
            Talaba qo'shish<i class="ms-2 bi bi-person-plus-fill"></i>
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
              {studentData?.map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{student.firstname}</td>
                  <td>{student.lastname}</td>
                  <td>{student.age}</td>
                  <td>
                    {student.edutype === "Kontrakt" ? (
                      <span className="kontrakt">{student.edutype}</span>
                    ) : (
                      <span className="grand">{student.edutype}</span>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => deleteFunction(index)}
                      className="btn btn-danger"
                    >
                      <i class="bi bi-trash"></i>
                    </button>
                    <button className="btn btn-warning ms-5">
                      <i class="bi bi-pen"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default StudentList;

import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import CreateEmployee from "../../components/Student-Crud/CreateEmployee";
import DeleteEmployee from "../../components/Student-Crud/DeleteEmployee";
import UpdateEmployee from "../../components/Student-Crud/UpdateEmployee";
import {
  FilteringEmployee,
  getEmployees,
  setDeleteEmployeeId,
  setUpdateEmployeeId,
} from "../../redux/actions/employeesAction";
import "./Employee.css";

const StudentCrudApi = () => {
  const dispatch = useDispatch();

  const { employees, staticEmployees, loading } = useSelector(
    (state) => state.employeesReducer
  );

  const [show, setShow] = useState(false);

  const [search_text, setSearch_text] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const toggle = () => setShow(!show);

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  const setDeleteEmployee = (id) => {
    dispatch(setDeleteEmployeeId(id));
  };

  const setUpdateEmployee = (id) => {
    dispatch(setUpdateEmployeeId(id));
  };

  const FilterEmployees = (event) => {
    setSearch_text(event.target.value.toLowerCase());

    let searchText = event.target.value.toLowerCase();

    let filterData = staticEmployees.filter(
      (employee) =>
        employee.firstName.toLowerCase().includes(searchText) ||
        employee.lastName.toLowerCase().includes(searchText) ||
        String(employee.age).includes(searchText) ||
        employee.position.toLowerCase().includes(searchText) ||
        String(employee.salary).includes(searchText)
    );

    dispatch(FilteringEmployee(filterData));
  };

  return (
    <Layout>
      <div className="Employees">
        <div className="row mb-4">
          <div className="col-xl-12">
            <div className="d-flex align-items-center justify-content-between">
              <h2>Xodimlar</h2>

              <div className="w-25 input-box">
                <input
                  type="search"
                  placeholder="Qidirish"
                  className="form-control"
                  value={search_text}
                  onChange={FilterEmployees}
                />
              </div>

              <button onClick={handleShow} className="btn btn-success">
                Xodim qo'shish<i className="ms-2 bi bi-person-plus-fill"></i>
              </button>
            </div>

            <table className="table table-bordered text-dark mt-5">
              <thead style={{ backgroundColor: "#0DCAF0", color: "white" }}>
                <tr>
                  <th>№</th>
                  <th>Ismi</th>
                  <th>Familiyasi</th>
                  <th>Yoshi</th>
                  <th>Lavozimi</th>
                  <th>Maoshi</th>
                  <th>Amallar</th>
                </tr>
              </thead>

              <tbody>
                {!loading ? (
                  employees.map((employee, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.age}</td>
                      <td>{employee.position}</td>
                      <th>
                        <CurrencyFormat
                          value={employee.salary}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix={" so'm"}
                        />
                      </th>

                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => setDeleteEmployee(employee.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                        <button
                          onClick={() => setUpdateEmployee(employee.id)}
                          className="btn btn-warning ms-5"
                        >
                          <i className="bi bi-pen"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <SkeletonTheme baseColor="#eceded" highlightColor="#c8c9c9">
                    <tr>
                      <td>
                        <Skeleton height={"22px"} width={"30px"} count={1} />
                      </td>
                      <td>
                        <Skeleton height={"22px"} width={"100px"} count={1} />
                      </td>
                      <td>
                        <Skeleton height={"22px"} width={"100px"} count={1} />
                      </td>
                      <td>
                        <Skeleton height={"22px"} width={"100px"} count={1} />
                      </td>
                      <td>
                        <Skeleton height={"22px"} width={"100px"} count={1} />
                      </td>
                      <td>
                        <Skeleton height={"22px"} width={"100px"} count={1} />
                      </td>
                      <td className="d-flex align-items-center justify-content-evenly">
                        <Skeleton height={"35px"} width={"45px"} count={1} />
                        <Skeleton height={"35px"} width={"45px"} count={1} />
                      </td>
                    </tr>
                  </SkeletonTheme>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CreateEmployee handleClose={handleClose} show={show} toggle={toggle} />

      <DeleteEmployee />

      <UpdateEmployee />
    </Layout>
  );
};

export default StudentCrudApi;

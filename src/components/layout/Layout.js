import React from "react";
import { NavLink } from "react-router-dom";
import "./Layout.scss";
const Layout = ({ children }) => {
  const data = [
    {
      title: "Home",
      icon: <i className="fs-4 bi-house"></i>,
      path: "/home",
    },
    {
      title: "Connect-counter",
      icon: <i className="bi bi-dice-5"></i>,
      path: "/connectCounter",
    },
    {
      title: "Hook-counter",
      icon: <i className="bi bi-dice-4"></i>,
      path: "/hookCounter",
    },
    {
      title: "Student CRUD",
      icon: <i className="fs-4 bi-table"></i>,
      path: "/studentlist",
    },
    {
      title: "Employees CRUD with API",
      icon: <i className="fs-4 bi-table"></i>,
      path: "/studentCrudAPi",
    },
  ];
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-xl-3 col-auto col-md-3 col-xl-2 px-sm-2 px-0  bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                className="myname d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">Diyorbek</span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                {data.map((item, index) => (
                  <li className="nav-item " key={index}>
                    <NavLink to={item.path} activeClassName="active-link" className="active-element align-middle px-0">
                      {item.icon}
                      <span className="ms-1 d-none d-sm-inline">{item.title}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col py-3 col-xl-9">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

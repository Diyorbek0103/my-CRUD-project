import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { addEmployees } from "../../redux/actions/employeesAction";

const CreateEmployee = ({ handleClose, show, toggle }) => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.employeesReducer);

  const handleSubmit = (event, data) => {
    dispatch(addEmployees(data, handleClose));
  };

  const onClose = () => {
    handleClose();
  };

  return (
    <Fragment>
      <Modal isOpen={show} toggle={toggle}>
        <ModalHeader className="bg-success text-white" toggle={toggle}>
          Xodim Qo'shish
        </ModalHeader>
        <ModalBody>
          <AvForm className="w-100" onValidSubmit={handleSubmit}>
            <AvField
              type="text"
              label="Ismni kiriting"
              name="firstName"
              required
              className="mb-3 form-control"
            />
            <AvField
              type="text"
              label="Familiya kiriting"
              name="lastName"
              required
              className="mb-3 form-control"
            />
            <AvField
              type="number"
              label="Yoshni kiriting"
              name="age"
              required
              className="mb-3 form-control"
            />
            <AvField
              type="text"
              label="Maoshni kiriting"
              name="salary"
              required
              className="mb-3 form-control"
            />
            <AvField
              type="select"
              name="position"
              className="mb-3 form-control"
            >
              <option value="" selected={true} disabled={true}>
                Lavozimni tanlang
              </option>
              <option value="Director">Director</option>
              <option value="Developer">Developer</option>
              <option value="Manager">Manager</option>
            </AvField>

            <div className="d-flex mt-4">
              <button
                onClick={onClose}
                type="button"
                className="w-50 text-white btn btn-info"
              >
                Chiqish
              </button>
              <button
                type="submit"
                className="w-50 ms-2 text-white btn btn-success"
                disabled={loading}
              >
                Saqlash
              </button>
            </div>
          </AvForm>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default CreateEmployee;

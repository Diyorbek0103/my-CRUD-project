import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { actionTypes } from "../../redux/actionTypes/actionTypes";
import { updateEmployee } from "../../redux/actions/employeesAction";

const UpdateEmployee = ({}) => {
  const dispatch = useDispatch();

  const { loading, update_employee } = useSelector(
    (state) => state.employeesReducer
  );

  const handleSubmit = (event, data) => {
    dispatch(updateEmployee(update_employee.id, closeModal, data));
  };

  const closeModal = () => {
    dispatch({
      type: actionTypes.REMOVE_UPDATE_EMPLOYEE,
    });
  };

  let condition = false;
  if (update_employee !== null) {
    condition = true;
  }

  return (
    <div>
      <Modal isOpen={condition} toggle={closeModal}>
        <ModalHeader className="bg-success text-white" toggle={closeModal}>
          Xodim Tahrirlash
        </ModalHeader>
        <ModalBody>
          <AvForm
            className="w-100"
            model={update_employee}
            onValidSubmit={handleSubmit}
          >
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
                onClick={closeModal}
                type="button"
                className="w-50 text-white btn btn-info"
              >
                Chiqish
              </button>
              <button
                type="submit"
                className="w-50 ms-2 text-white btn btn-warning"
                disabled={loading}
              >
                Tahrirlash
              </button>
            </div>
          </AvForm>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default UpdateEmployee;

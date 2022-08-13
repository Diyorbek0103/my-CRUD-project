import React from 'react'
import {Modal,ModalHeader,ModalFooter,ModalBody} from 'reactstrap';
import { useDispatch,useSelector } from 'react-redux';
import { actionTypes } from '../../redux/actionTypes/actionTypes';
import { deleteEmployee } from '../../redux/actions/employeesAction';

const DeleteEmployee = () => {

    const dispatch= useDispatch();

    const {loading,employees,delete_employee}= useSelector(state=>state.employeesReducer);

    const closeModal=()=>{
        dispatch({
            type:actionTypes.REMOVE_DELETE_EMPLOYEE
        })
    }

    const onConfirm=()=>{
        dispatch(deleteEmployee(delete_employee?.id,closeModal))
    }

    let condition=false;
    if(delete_employee!==null){
        condition=true
    }

  return (
    <div>

    <Modal isOpen={condition} toggle={closeModal}>
        <ModalHeader className='bg-danger text-white' toggle={closeModal}>
            Xodimni O'chirish
        </ModalHeader>
        <ModalBody>
            Siz haqiqatdan ham ushbu <b>{delete_employee?.firstName} {delete_employee?.lastName}</b> nomli xodimni o'chirmoqchimisiz ?
        </ModalBody>

        <ModalFooter>
            <button onClick={closeModal} className="btn btn-info text-white">YO'Q</button>
            <button onClick={onConfirm} disabled={loading} className='btn btn-danger text-white'>HA</button>
        </ModalFooter>
    </Modal>

    </div>
  )
}

export default DeleteEmployee
import { actionTypes } from "../actionTypes/actionTypes"

export const deleteAction=()=>async(dispatch)=>{
    dispatch({
        type:actionTypes.LOADING_TRUE
    })
    try {
        dispatch({
            type:actionTypes.DELETE,
        })
    } catch (error) {
        dispatch({
            type:actionTypes.LOADING_FALSE
        })
    }
}


export const addstudentAction=()=>async(dispatch)=>{
    dispatch({
        type:actionTypes.LOADING_TRUE
    })
    try {
        dispatch({
            type:actionTypes.ADD_STUDENT,
        })
    } catch (error) {
        dispatch({
            type:actionTypes.LOADING_FALSE
        })
    }
}

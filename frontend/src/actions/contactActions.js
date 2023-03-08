import axios from 'axios'
import {
    CONTACT_ADD_REQUEST,
    CONTACT_ADD_SUCCESS,
    CONTACT_ADD_FAIL,
} from "../constants/contactConstants"
export const createContact = (formData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CONTACT_ADD_REQUEST
        })

        const { data } = await axios.post(
            `http://localhost:8002/api/contacts/create/`,
            formData,
            
        )
        dispatch({
            type: CONTACT_ADD_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: CONTACT_ADD_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
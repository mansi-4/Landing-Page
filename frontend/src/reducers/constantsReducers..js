import {
    CONTACT_ADD_REQUEST,
    CONTACT_ADD_SUCCESS,
    CONTACT_ADD_FAIL,
    CONTACT_ADD_RESET
} from "../constants/contactConstants"
export const contactCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CONTACT_ADD_REQUEST:
            return { loading: true }

        case CONTACT_ADD_SUCCESS:
            return { loading: false, success: true, contact: action.payload }

        case CONTACT_ADD_FAIL:
            return { loading: false, error: action.payload }

        case CONTACT_ADD_RESET:
            return {}

        default:
            return state
    }
}

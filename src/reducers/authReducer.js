import {
    SUCCESS_REGISTRATION,
    ERROR_REGISTRATION,
    SUCCESS_LOGIN,
    ERROR_LOGIN,
    GET_USER,
    LOGOUT
} from '../types'

const initialState = {
    token: localStorage.getItem('token'),
    authenticated: null,
    user: null,
    message: null, 
    loading: true
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {       
        case SUCCESS_REGISTRATION:
        case SUCCESS_LOGIN:
            localStorage.setItem('token', action.payload)
            return {
                ...state,                
                authenticated: true,
                message: null,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                authenticated: true,
                message: null,
                loading: false
            }
        case ERROR_REGISTRATION:
        case ERROR_LOGIN:
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                token: null,
                authenticated: null,
                user: null,
                message: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default authReducer
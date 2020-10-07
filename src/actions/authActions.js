import axiosClient from '../config/axiosClient'
import sendTokenHeader from '../config/sendTokenHeader'
import {
    SUCCESS_REGISTRATION,
    ERROR_REGISTRATION,
    SUCCESS_LOGIN,
    ERROR_LOGIN,
    GET_USER,
    LOGOUT
} from '../types'


/**
 *  Create User *******************************************
 */
export const createUserAction = user => {
    
    return async dispatch => {
        try {
            const res = await axiosClient.post('/api/create-user', user)
            dispatch(createUser(res.data))
            
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch(errorUser(alert))
        }
    }
}
const createUser = token => ({
    type: SUCCESS_REGISTRATION,
    payload: token
})
const errorUser = (alert) => ({
    type: ERROR_REGISTRATION,
    payload: alert
})


/**
 *  Get auth User *****************************************
 */
export const getUserAction = () => {
    const token = localStorage.getItem('token')
    
    if(token) {
        sendTokenHeader(token)
    }
    else {
        delete axiosClient.defaults.headers.common['x-auth-token']
    }

    return async dispatch => {
        try {
            const res = await axiosClient.get('/api/login')
            dispatch(getUser(res.data))
            
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch(errorGetUser(alert))
        }
    }
}
const getUser = user => ({
    type: GET_USER,
    payload: user
})

const errorGetUser = (alert) => ({
    type: ERROR_LOGIN,
    payload: alert
})


/**
 *  Login User ********************************************
 */
export const loginUserAction = user => {
    return async dispatch => {
        try {
            const res = await axiosClient.post('/api/login', user)
            dispatch(loginUser(res.data))
            
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch(errorLogin(alert))
        }
    }
}
const loginUser = token => ({
    type: SUCCESS_LOGIN,
    payload: token
})
const errorLogin = alert => ({
    type: ERROR_LOGIN,
    payload: alert
})


/**
 *  Logout User *******************************************
 */
export const logoutUserAction = () => {
    return dispatch => {
        dispatch(logoutUser())
    }
}
const logoutUser = () => ({
    type: LOGOUT
})
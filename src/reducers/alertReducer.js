import {
    SHOW_PROJECT_ALERT,
    SHOW_TASK_ALERT,
    SHOW_ALERT,
    HIDEE_ALERT
} from '../types'

const initialState = {
    projectAlert: null,
    taskAlert: null,
    alert: null
}

const alertReducer = (state = initialState, action) => {

    switch (action.type) {   
        case SHOW_PROJECT_ALERT:
            return {
                ...state,
                projectAlert: action.payload,
                taskAlert: null,
                alert: null
            }    
        case SHOW_TASK_ALERT:
            return {
                ...state,
                taskAlert: action.payload,
                projectAlert: null,
                alert: null
            }     
        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload,
                taskAlert: null,
                projectAlert: null,
            }
        case HIDEE_ALERT:
            return {
                ...state,
                alert: null,
                taskAlert: null,
                projectAlert: null
            }
        default:
            return state
    }
}

export default alertReducer
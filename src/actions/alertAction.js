import {
    SHOW_PROJECT_ALERT,
    SHOW_TASK_ALERT,
    SHOW_ALERT,
    HIDEE_ALERT
} from '../types'

export const showAlertAction = (msg, category, alert = null) => {
    return dispatch => {
        console.log(alert)
        if(alert === 'project') {
            console.log('project entro')
            dispatch(showProjectAlert(msg, category))
        }
        if(alert === 'task') {
            console.log('task entro')
            dispatch(showTaskAlert(msg, category))
        }
        if(!alert) {
            console.log('alert entro')
            dispatch(showAlert(msg, category))
        }

        setTimeout(() => {
            dispatch(hideAlert())
        }, 5000);
    }
}
const showProjectAlert = (msg, category) => ({
    type: SHOW_PROJECT_ALERT,
    payload: {msg, category}
})
const showTaskAlert = (msg, category) => ({
    type: SHOW_TASK_ALERT,
    payload: {msg, category}
})
const showAlert = (msg, category) => ({
    type: SHOW_ALERT,
    payload: {msg, category}
})
const hideAlert = () => ({
    type: HIDEE_ALERT
})
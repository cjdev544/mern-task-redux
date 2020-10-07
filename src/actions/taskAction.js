import axiosClient from '../config/axiosClient'
import {
    CREATE_TASK,
    ERROR_TASK,
    GET_TASKS,
    UPDATE_TASK,
    SELECT_TASK,
    DELETE_TASK
} from '../types'


/**
 *  Create Task *******************************************
 */
export const createTaskAction = task => {
    return async dispatch => {
        try {
            const res = await axiosClient.post('/api/tasks', task)
            dispatch(createTask(res.data))
            
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'mensaje error'
            }
            dispatch(errorTask(alert))
        }
    }
}
const createTask = task => ({
    type: CREATE_TASK,
    payload: task
})
const errorTask = alert => ({
    type: ERROR_TASK,
    payload: alert
})


/**
 *  Get Task of Project selected
 */
export const getTaskAction = projectId => {
    return async dispatch => {
        try {
            const res = await axiosClient.get('/api/tasks', { params: { projectId } })
            dispatch(getTasks(res.data))
            
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'mensaje error'
            }
            dispatch(errorTask(alert))
        }
    }
}
const getTasks = tasks => ({
    type: GET_TASKS,
    payload: tasks
})


/**
 *  Update Task *******************************************
 */
export const updateTaskAction = task => {
    return async dispatch => {
        try {
            const res = await axiosClient.put(`/api/tasks/${task._id}`, task)
            dispatch(updateTask(res.data))
            
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'mensaje error'
            }
            dispatch(errorTask(alert))
        }
    }
}
const updateTask = task => ({
    type: UPDATE_TASK,
    payload: task
})


/**
 *  Select Task *******************************************
 */
export const selectTaskAction = taskId => {
    return dispatch => {
        dispatch(selectTask(taskId))
    }
}
const selectTask = taskId => ({
    type: SELECT_TASK,
    payload: taskId
})


/**
 *  Delete Task *******************************************
 */
export const deleteTaskAction = taskId => {
    return async dispatch => {
        try {
            await axiosClient.delete(`/api/tasks/${taskId}`)
            dispatch(deleteTask(taskId))
            
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'mensaje error'
            }
            dispatch(errorTask(alert))
        }
    }
}
const deleteTask = taskId => ({
    type: DELETE_TASK,
    payload: taskId
})
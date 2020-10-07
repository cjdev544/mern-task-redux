import axiosClient from '../config/axiosClient'
import {
    CREATE_NEWPROJECT, 
    ERROR_NEWPROJECT,
    GET_PROJECTS,
    SELECT_PROJECT,
    DELETE_PROJECT
} from '../types'

/**
 *  Create project ****************************************
 */
export const createProjectAction = project => {
    return async dispatch => {
        try {
            const res = await axiosClient.post('/api/projects',project)
            dispatch(createProject(res.data))
            
        } catch (error) {
            const alert = {
                category: 'mensaje error',
                msg: error.response.date.msg
            }
            dispatch(errorProject(alert))
        }
    }
}
const createProject = project => ({
    type: CREATE_NEWPROJECT,
    payload: project
})
const errorProject = alert => ({
    type: ERROR_NEWPROJECT,
    payload: alert
})


/**
 *  Get Projects ******************************************
 */
export const getProjectsAction = () => {
    return async dispatch => {
        try {
            const res = await axiosClient.get('/api/projects')
            dispatch(getProjects(res.data))
            
        } catch (error) {
            const alert = {
                category: 'mensaje error',
                msg: error.response.date.msg
            }
            dispatch(errorProject(alert))
        }
    }
}
const getProjects = project => ({
    type: GET_PROJECTS,
    payload: project
})


/**
 *  Select Project ****************************************
 */
export const selectProjectAction = (project = null) => {
    return dispatch => {
        dispatch(selectProject(project._id))
    }
}
const selectProject = projectId => ({
    type: SELECT_PROJECT,
    payload: projectId
})

/**
 *  Delete Project ****************************************
 */
export const deleteProjectAction = project => {
    return async dispatch => {
        try {
            await axiosClient.delete(`/api/projects/${project._id}`)
            dispatch(deleteProject(project._id))
            
        } catch (error) {
            const alert = {
                category: 'mensaje error',
                msg: error.response.date.msg
            }
            dispatch(errorProject(alert))
        }
    }
}
const deleteProject = projectId => ({
    type: DELETE_PROJECT,
    payload: projectId
})
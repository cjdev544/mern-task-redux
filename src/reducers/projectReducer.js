import {
    CREATE_NEWPROJECT, 
    ERROR_NEWPROJECT,
    GET_PROJECTS,
    SELECT_PROJECT,
    DELETE_PROJECT
} from '../types'

const initialState = {
    projects: [],
    projectSelected: null,
    message: null,
    projectvalidator: null
}

const projectReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_NEWPROJECT:
            return {
                ...state,
                message: null,
                projectSelected: null,
                projectvalidator: null,
                projects: [action.payload, ...state.projects]
            }
        case ERROR_NEWPROJECT: 
            return {
                ...state,
                projectSelected: null,
                message: action.payload,
                projectvalidator: null,
            }
        case GET_PROJECTS:
            return {
                ...state,
                projectSelected: null,
                message: null,
                projects: action.payload,
                projectvalidator: null,
            }
        case SELECT_PROJECT:
            return {
                ...state,
                projectSelected: state.projects.filter(project => project._id === action.payload)[0],
                projectvalidator: null,
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projectSelected: null,
                message: null,
                projects: state.projects.filter(project => project._id !== action.payload),
                projectvalidator: null,
            }
        default:
            return state
    }
}

export default projectReducer
import {
    CREATE_TASK,
    ERROR_TASK,
    GET_TASKS,
    UPDATE_TASK,
    SELECT_TASK,
    DELETE_TASK
} from '../types'

const initialState = {
    tasksproject: [],
    message: null,
    taskselect: null,
    tasktvalidator: null,
}

const taskReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_TASK:
            return {
                ...state,
                message: null,
                taskselect: null,
                tasksproject: [...state.tasksproject, action.payload],
                tasktvalidator: null
            }
        case ERROR_TASK:
            return {
                ...state,
                taskselect: null,
                message: action.payload,
                tasktvalidator: true
            }
        case GET_TASKS:
            return {
                ...state,
                message: null,
                taskselect: null,
                tasksproject: action.payload,
                tasktvalidator: null
            }
        case UPDATE_TASK:
            return {
                ...state,
                message: null,
                taskselect: null,
                tasktvalidator: null,
                tasksproject: state.tasksproject.map(task => 
                    task._id === action.payload._id
                        ? action.payload
                        : task
                    )
            }
        case SELECT_TASK:
            return {
                ...state,
                message: null,
                taskselect: state.tasksproject.filter(task => task._id === action.payload)[0],
                tasktvalidator: null
            }
            case DELETE_TASK:
                return {
                    ...state,
                    message: null,
                    taskselect: null,
                    tasksproject: state.tasksproject.filter(task => task._id !== action.payload),
                    tasktvalidator: null
                }
        default:
            return state
    }
}

export default taskReducer
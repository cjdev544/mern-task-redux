import React from 'react'
import { useDispatch } from 'react-redux'
import { selectProjectAction } from '../../actions/projectAction'
import { getTaskAction } from '../../actions/taskAction'

const Project = ({project}) => {

    // useDispatch
    const dispatch = useDispatch()

    // Selec Task
    const selectTask = () => {
        dispatch(selectProjectAction(project))
        dispatch(getTaskAction(project._id))
    }

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={selectTask}
            >{project.name}</button>
        </li>
     );
}
 
export default Project;
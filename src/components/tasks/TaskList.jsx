import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showAlertAction } from '../../actions/alertAction'
import { deleteProjectAction } from '../../actions/projectAction'
import Task from '../tasks/Task'

const TaskList = () => {

    // Get value of Project, Task and Alert redux 
    const project = useSelector(state => state.project)
    const task = useSelector(state => state.task)
    const alert = useSelector(state => state.alert.alert)
    const { projectSelected } = project
    const { message, tasksproject } = task

    // useDispatch
    const dispatch = useDispatch()

    // useEffect
    useEffect( () => {
        if(message) {
            dispatch(showAlertAction(message.msg, `alert ${message.category}`))
        }
        // eslint-disable-next-line
    }, [message])

    if(!projectSelected) return <h2>Selecciona un Proyecto</h2>


    return (  
        <>
            <h2>Proyecto: {projectSelected.name}</h2>
            {
                alert ? (<p className={alert.category}>{alert.msg}</p>) : null
            }  
            <ul className="listado-tareas">
                
                {
                    tasksproject ? 
                    tasksproject.map(task => (
                        <Task 
                            key={task._id}
                            task={task}
                        />
                    )) : null
                }
            </ul>

            <button     
                type="button"
                className="btn btn-eliminar"
                onClick={() => dispatch(deleteProjectAction(projectSelected))}
            >Eliminar Proyecto &times;</button>
        </>
    );
}
 
export default TaskList;
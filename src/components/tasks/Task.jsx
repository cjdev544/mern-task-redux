import React from 'react'
import { useDispatch } from 'react-redux';
import { updateTaskAction, selectTaskAction, deleteTaskAction } from '../../actions/taskAction'

const Task = ({task}) => {

    // useDispatch
    const dispatch = useDispatch()

    // Update task state
    const updateTaskState = stateTask => {
        task.state = stateTask
        dispatch(updateTaskAction(task))
    }

    return (
        <li className="tarea sombra">
            <p>{task.name}</p>

            <div className="estado">
                {
                    task.state
                    ? (
                        <button
                            type="button"
                            className="completo"
                            onClick={ () => updateTaskState(false) }
                        >Completo</button>
                    )
                    :(
                        <button
                            type="button"
                            className="incompleto"
                            onClick={ () => updateTaskState(true) }
                        >Incompleto</button>
                    )
                }              
            </div>

            <div className="acciones">
                <button 
                    type="button"
                    className="btn btn-primario"
                    onClick={ () => dispatch(selectTaskAction(task._id))}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"  
                    onClick={() => dispatch(deleteTaskAction(task._id))}                  
                >Eliminar</button>
            </div>
        </li>
      );
}
 
export default Task;
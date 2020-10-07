import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showAlertAction } from '../../actions/alertAction'
import { createTaskAction, updateTaskAction } from '../../actions/taskAction'

const TaskForm = () => {

    // Form state
    const [newtask, setNewTask] = useState({ 
        name: '',
        projectId: ''
    })

    // Get state of Project, Task and Alert redux
    const project = useSelector(state => state.project)
    const task = useSelector(state => state.task)
    const taskAlert = useSelector(state => state.alert.taskAlert)
    const { projectSelected } = project
    const { message, taskselect } = task

    // useDispatch
    const dispatch = useDispatch()

    // useEffect
    useEffect( () => {
        if(message) {
            dispatch(showAlertAction(message.msg, `alert ${message.category}, 'task`))
        }
        if(taskselect) {
            setNewTask(taskselect)
        }
        else {
            setNewTask({
                name: '',
                projectId: ''
            }) 
        }
        // eslint-disable-next-line
    }, [message, taskselect])

    // Submit Form
    const submitForm = e => {
        e.preventDefault()

        // Form validation
        if(newtask.name.trim() === '') {
            dispatch(showAlertAction('El nombre de la Tarea es obligatorio', 'mensaje error', 'task'))
            return
        }

        // Create or Update Task
        if(taskselect) {
            dispatch(updateTaskAction(newtask))
        }
        else {
            dispatch(createTaskAction(newtask))
        }

        // Form reset
        setNewTask({
            name: '',
            projectId: ''
        })
    }

    if(!projectSelected) return null

    return (  
        <div className="formulario">
            <form
                onSubmit={submitForm}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="name"
                        value={newtask.name}
                        onChange={ e => setNewTask({
                            ...newtask,
                            name: e.target.value,
                            projectId: projectSelected._id
                        })}
                    />
                </div>

                <div className="contenedor-input">    
                    {
                        taskselect 
                        ?(
                            <input 
                                type="submit"
                                className="btn btn-primario btn-submit btn-block"
                                value="Editar Tarea" 
                            /> 
                        )
                        : (
                            <input 
                                type="submit"
                                className="btn btn-primario btn-submit btn-block"
                                value="Crear Tarea" 
                            />
                        )
                    }                  
                </div>
            </form>
            {
                taskAlert ? (<p className={taskAlert.category}>{taskAlert.msg}</p>) : null
            }         
        </div>
    );
}
 
export default TaskForm;
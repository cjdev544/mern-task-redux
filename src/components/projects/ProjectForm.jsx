import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showAlertAction } from '../../actions/alertAction'
import { createProjectAction } from '../../actions/projectAction'

const ProjectForm = () => {

    // Form state
    const [newproject, setNewProject] = useState({ name: '' })
    const { name } = newproject

    // Show form state
    const [showform, setShowForm] = useState(false)

    // useDispatsh
    const dispatch = useDispatch()

    // Get values of Project and Alert redux
    const projectAlert = useSelector(state => state.alert.projectAlert)
    const project = useSelector(state => state.project)
    const { message } = project

    // useEffect
    useEffect( () => {
        if(message) {
            dispatch(showAlertAction(message.msg, `alert ${message.category}, 'project`))
        }
        // eslint-disable-next-line
    }, [message])

    // Submit project form
    const submitProjectForm = e => {
        e.preventDefault()

        // Form validation
        if(name.trim() === '') {
            dispatch(showAlertAction('El nombre del proyecto es obligatorio', 'mensaje error', 'project'))
            return
        }

        // Send new Project
        dispatch(createProjectAction(newproject))
        setShowForm(false)
        setNewProject({name: ''})
    }

    
    return ( 
        <>
            <button 
                type="button"
                className="btn btn-block btn-primario"
                onClick={ () => setShowForm(true)}
            >Nuevo Proyecto</button>
            {
                showform ?
                (<form
                    className="formulario-nuevo-proyecto"
                    onSubmit={submitProjectForm}
                >
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="name"
                        value={name}
                        onChange={ e => setNewProject({name: e.target.value})}
                    />

                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar Proyecto"
                    />
                </form>) : null
            }
            {
                projectAlert ? (<p className={projectAlert.category}>{projectAlert.msg}</p>) : null
            }             
        </>
     );
}
 
export default ProjectForm;
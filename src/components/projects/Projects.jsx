import React, { useEffect } from 'react';
import Sidebar from '../layouts/Sidebar'
import Navbar from '../layouts/Navbar'
import TaskForm from '../tasks/TaskForm'
import TaskList from '../tasks/TaskList'
import { getUserAction } from '../../actions/authActions'
import { useDispatch } from 'react-redux';

const Projects = () => {

    // useDispatch
    const dispatch = useDispatch()

    // useEffect
    useEffect( () => {
        dispatch(getUserAction())
        // eslint-disable-next-line
    }, [])

    return (  
        <div className="contenedor-app">
            <Sidebar />

            <div className="seccion-principal">
                <Navbar />

                <main>
                    <TaskForm />

                    <div className="contenedor-tareas">
                        <TaskList />
                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default Projects;
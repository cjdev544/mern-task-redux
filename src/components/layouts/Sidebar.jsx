import React from 'react'
import { useSelector } from 'react-redux'
import ProjectForm from '../projects/ProjectForm'
import ProjectList from '../projects/ProjectList'

const Sidebar = () => {

    // Get values of Project redux
    const project = useSelector(state => state.project)
    const { projects } = project

    return (  
        <aside>
            <h1>MERN<span>Tasks</span></h1>

            <ProjectForm />    
                {
                    projects.length !== 0
                    ? (
                        <div className="proyectos">
                            <h2>Tus Proyectos</h2>
                            <ProjectList />
                        </div>
                    )
                    : (
                        <div className="proyectos">
                            <h2>Crea tu primer Proyecto</h2>
                            <ProjectList />
                        </div>
                    )
                }              
        </aside>
    );
}
 
export default Sidebar;
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsAction } from '../../actions/projectAction'
import Project from '../projects/Project'

const ProjectList = () => {

    // useDispatch
    const dispatch = useDispatch()

    // get values of Project and Alert redux
    const project = useSelector(state => state.project)
    const { projects } = project

    useState( () => {
        dispatch(getProjectsAction())
        // eslint-disable-next-line
    }, [])


    return (  
        <ul className="listado-proyectos">            
            {
                projects 
                ? (
                    projects.map( project => (
                        <Project 
                            key={project._id}
                            project={project}
                        />
                    ))
                )
                : null
            }
        </ul>
    );
}
 
export default ProjectList;
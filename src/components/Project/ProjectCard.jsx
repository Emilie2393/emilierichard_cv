import React from 'react';
import { useParams } from 'react-router-dom';
import {portfolio} from '../../data/skills'
import ProjectGallery from './ProjectGallery';
import '../../styles/components/ProjectCard.scss'

const ProjectCard = () => {

    const {id} = useParams();
    const projectInfos = portfolio.filter((project) => project.id === id);
    console.log(projectInfos)

    return (
        <div className='project'>
            
            {projectInfos.map((project) => (
            <li key={project.id} className="project__card">
                <h1 className="project__card__title">{project.title}</h1>
                <ProjectGallery pictures={project.pictures}/>
                <p className='project__card__description'>{project.description}</p> 
            </li>
            
        ))}
            
        </div>
    );
};

export default ProjectCard;
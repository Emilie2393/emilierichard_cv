import React from "react";
import Navigation from "../components/Navigation";
import ProjectCard from "../components/Project/ProjectCard";
import Footer from '../components/Footer'

const Project = () => {
    return (
        <div>
            <Navigation/>
            <ProjectCard/>
            <Footer/>
        </div>
    );
};

export default Project;
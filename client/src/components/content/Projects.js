import '../../styles/Project.css';
import TopBar from '../TopBar';
import Background3D from '../Background3D';
import { useState } from 'react';
import ProjectDetails from '../ProjectDetails';

export default function Projects() {
    const projects = [
        {
            id: 1,
            name: 'Weather App',
            short_description: 'An application to display the state of the weather in a specific location',
            long_description: 'This Weather App fetches real-time data from an external weather API allowing users to view temperature, humidity, wind speed and forecast data. The UI is built in React, and Node.js handles API calls for better security and caching.',
            tech_stack: ['JavaScript', 'ReactJs', 'Nodejs'],
            demo_video: 'https://www.youtube.com/watch?v=fvkqMN-t1l4',
            github: 'https://github.com/username/weather-app'
        },
        {
            id: 2,
            name: 'Shell',
            short_description: 'A command line interface to run bash scripts',
            long_description: 'This project is a custom Unix Shell implementation in C. It supports basic commands, piping, redirection, background execution, and environment variable handling.',
            tech_stack: ['C'],
            demo_video: 'https://www.youtube.com/watch?v=fvkqMN-t1l4',
            github: 'https://github.com/username/shell-project'
        },
        {
            id: 3,
            name: 'Machine Learning Model',
            short_description: 'A machine learning model to process data and identify patterns',
            long_description: 'A predictive machine learning model built with Python and Sci-Kit Learn. It includes preprocessing pipelines, feature engineering, and hyperparameter tuning to identify hidden data patterns.',
            tech_stack: ['Python'],
            demo_video: 'https://www.youtube.com/watch?v=fvkqMN-t1l4',
            github: 'https://github.com/username/ml-model'
        }
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    function ProjectInfo({ project }) {
        return (
            <section className="projects-information">
                <h2 className="project-name">{project.name}</h2>
                <p className="project-short-description"> <strong> Description:  </strong>{project.short_description}</p>
                <p className="tech-stack"> <strong> Tech stack:   </strong>{project.tech_stack.join(", ")}</p>

                <button 
                    className="more-btn"
                    onClick={() => setSelectedProject(project)}
                >
                    More
                </button>
            </section>
        );
    }

    return (
        <>
            <Background3D />
            <TopBar />

            <section className="project-container">
                {projects.map(project => (
                    <ProjectInfo key={project.id} project={project} />
                ))}
            </section>

            <ProjectDetails 
                project={selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />
        </>
    );
}

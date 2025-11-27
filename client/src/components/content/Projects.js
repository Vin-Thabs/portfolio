import '../../styles/Project.css';
import TopBar from '../TopBar';
import Background3D from '../Background3D';
import { useState } from 'react';
import ProjectDetails from '../ProjectDetails';

export default function Projects() {
    const projects = [
        {
            id: 1,
            name: 'RoboCup-AI',
            short_description: 'AI agent to play soccer against another AI agent/itself',
            long_description: 'The RoboCup 3D Soccer Simulation League, using Hungarian algorithm to find the best position for players, A* for optimal paths to goal',
            tech_stack: ['python', 'C/C++', 'bash'],
            demo_video: 'https://www.youtube.com/watch?v=fvkqMN-t1l4',
            github: 'https://github.com/Vin-Thabs/RoboCup-AI.git'
        },
        {
            id: 2,
            name: 'University Research Collaboration Platform',
            short_description: 'A platform for researchers to find others to collaborate with',
            long_description: 'This project, helps researchers to find other researchers to collaborate with, also find research to donate funds to. Export data about research topic',
            tech_stack: ['Javascript', 'ReactJs', 'MySQL', 'Azure', 'CI/CD pipeline (GitHub Actions)', 'TDD(Test Driven Development)'],
            demo_video: 'https://www.youtube.com/watch?v=fvkqMN-t1l4',
            github: 'https://github.com/Vin-Thabs/Uni-Research-Collab-Platform.git'
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

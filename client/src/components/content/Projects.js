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
            demo_video: 'https://www.youtube.com/watch?v=fvkqMN-t1l4', //change the link
            github: 'https://github.com/Vin-Thabs/RoboCup-AI.git'
        },
        {
            id: 2,
            name: 'University Research Collaboration Platform',
            short_description: 'A platform for researchers to find others to collaborate with.',
            long_description: 'This project, helps researchers to find other researchers to collaborate with, also find research to donate funds to. Export data about research topic.',
            tech_stack: ['Javascript', 'ReactJs', 'MySQL', 'Azure', 'CI/CD pipeline (GitHub Actions)', 'TDD(Test Driven Development)'],
            demo_video: 'https://www.youtube.com/watch?v=fvkqMN-t1l4', //change the link
            github: 'https://github.com/Vin-Thabs/Uni-Research-Collab-Platform.git'
        },
        {
            id: 3,
            name: 'FindFunder',
            short_description: 'Funding Management is Software solution used to management funds for funding',
            long_description: 'This project is a funding management, for funding for users. Users can donate funds, advertise the program that needs funds, upload PDFs with more information about the project that needs funding ',
            tech_stack: ['ReactJS', 'Azure Functions', 'GitHub Actions (CI/CD)', 'Azure', 'Firebase', 'MySQL'],
            demo_video: 'https://www.youtube.com/watch?v=1dVmYSSY_NU&feature=youtu.be',
            github: 'https://github.com/Vin-Thabs/funding-management.git'
        },
        {
            id: 4, 
            name: Gurdia,
            short_description: 'Gurdia is a well improved web application to minimize crime risks in certain areas',
            long_description: "Users can view high-risk zones, recent incidents reports, and receive route safety recommendations, empowering them to make informed decisions. Especially against women and children. Also through analyzing and displaying real-time and historic crime data  on an interactive map",
            tech_stack: ['ReactJS', 'Express', 'MySQL', 'Azure'],
            demo_video: '',
            github: 'https://github.com/Vin-Thabs/guardia.git'
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

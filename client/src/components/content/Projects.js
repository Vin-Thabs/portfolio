
import '../../styles/Project.css';
export default function Projects({ onClose }) {

    const projects = [
        {id: 1, name: 'Weather App', short_description: 'An application to display the state of the weather in a specific location', tech_stack: ['javascript', 'ReactJs', 'Nodejs']},
        {id: 2, name: 'Shell', short_description: 'A command line interface to run bash scripts', tech_stack: ['C']},
        {id: 3, name: 'Machine Learning Model', short_description: 'A machine learning model to process the data and identify the pattern within the data', tech_stack: ['Python']}
    ];

    function ProjectInfo({ name, short_description, tech_stack }) {
        return (
            <section className="projects-information">
                <h2 className="project-name">{name}</h2>
                <p className="project-short-description">{short_description}</p>
                <p className="tech-stack">{tech_stack.join(", ")}</p>
                <button className="more-btn">more</button>
            </section>
        );
    }

    return (
        <section className="project-container">

            {projects.map(project => (
                <ProjectInfo
                    key={project.id}
                    name={project.name}
                    short_description={project.short_description}
                    tech_stack={project.tech_stack}
                />
            ))}
        </section>
    );
}

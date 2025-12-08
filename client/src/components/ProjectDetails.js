import '../styles/ProjectDetails.css';

export default function ProjectDetails({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="project-details-overlay">
            <div className="project-details-card">
                <button className="close-btn" onClick={onClose}>✕</button>

                <h2>{project.name}</h2>

                <p className="long-description">{project.long_description}</p>

                {project.demo_video && (
                    <div className="video-container">
                        <iframe
                            src={project.demo_video}
                            title="Project Demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                {project.github && (
                    <a href={project.github} 
                       className="github-link" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        View Source Code on GitHub
                    </a>
                )}
            </div>
        </div>
    );
}

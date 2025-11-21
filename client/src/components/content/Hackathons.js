import React from "react";
import "../../styles/Hackathons.css";
import Background3D from '../Background3D';

export default function Hackathons() {

    const hackathons = [
        {id : 1, imageURL: 'https://th.bing.com/th/id/OIP.mO7VmB4iYVqfwnIcAz4TyAHaE2?w=261&h=180&c=7&r=0&o=7&pid=1.7&rm=3', companyName: 'Adapt IT', description: 'The Social Good Hackathon 2024', position: '1st Place, Winner', github : 'https://github.com/username/Hackathon2024'},
        {id : 2, imageURL: 'https://th.bing.com/th/id/OIP.mO7VmB4iYVqfwnIcAz4TyAHaE2?w=261&h=180&c=7&r=0&o=7&pid=1.7&rm=3', companyName: 'Adapt IT', description: 'The Social Good Hackathon 2023', position: 'Participant', github : ''},
        {id : 3, imageURL: 'https://th.bing.com/th/id/OIP.mO7VmB4iYVqfwnIcAz4TyAHaE2?w=261&h=180&c=7&r=0&o=7&pid=1.7&rm=3', companyName: 'Adapt IT', description: 'The Social Good Hackathon 2022', position: 'Participant', github : ''},
        {id : 4, imageURL: 'https://th.bing.com/th/id/OIP.mO7VmB4iYVqfwnIcAz4TyAHaE2?w=261&h=180&c=7&r=0&o=7&pid=1.7&rm=3', companyName: 'Adapt IT', description: 'The Social Good Hackathon 2021', position: '2nd Place', github : 'https://github.com/username/weather-app'},
    ];

    return (
        <div className="hackathons-container">
            <Background3D />
            <h1 className="hackathons-title">Hackathons</h1>

            <div className="hackathon-grid">
                {hackathons.map(h => (
                    <div key={h.id} className="hackathon-card">
                        
                        <img 
                            src={h.imageURL}
                            alt={h.companyName}
                            className="hackathon-img"
                        />

                        <h2 className="hackathon-company">{h.companyName}</h2>

                        <p className="hackathon-description">{h.description}</p>

                        <p className="hackathon-position">
                            <strong>Position:</strong> {h.position}
                        </p>

                        {h.github && (
                            <a href={h.github} target="_blank" rel="noopener noreferrer">
                                <button className="hackathon-btn">View Source Code in GitHub</button>
                            </a>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
}

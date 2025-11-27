import React from "react";
import "../../styles/Hackathons.css";
import Background3D from '../Background3D';
import TopBar from '../TopBar';

export default function Hackathons() {

    const hackathons = [
        {id : 1, imageURL: 'https://th.bing.com/th/id/OIP.mO7VmB4iYVqfwnIcAz4TyAHaE2?w=261&h=180&c=7&r=0&o=7&pid=1.7&rm=3', companyName: 'Adapt IT: The Social Good Hackathon 2025', description: 'Built a software solution for an emergency SOS, to report crime incident in real time', position: 'Participant', github : ''},
        {id : 2, imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.-mm-NSlCOqGizensBQ3p7wHaEK%3Fpid%3DApi&f=1&ipt=79bbd360b4b5f9728334a66e3ef8fe5a337d445518fe1ff36b489a745c3f0060&ipo=images', companyName: 'Adapt IT: The social good hackathon 2024', description: 'Designing a software solution to optomize the tackle of socio economic issues ', position: '2nd Place', github : 'https://github.com/Vin-Thabs/AdaptIThackathon2024.git'},
        {id: 3, imageURL:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.nQgpq3ujcO9skdXYzgwZGwHaE8%3Fpid%3DApi&f=1&ipt=1f98e893219e977765da8818113ca22808c4fd225d4bc53e4032c5d44166a040&ipo=images', companyName: 'AdaptIt: The Social Good Hackathon 2023', description: 'Built a software solution to battle socio-economic issues', position: 'Participant'},
        {id : 4, imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.9dJoFM1pnNq4PCBTZkALtAHaE8%3Fpid%3DApi&f=1&ipt=abd012afcce5920447b1e9382e7bf0e957aae3c730a3cb5dbf28271cd06109c7&ipo=images', companyName: 'Adapt IT: The Social Good Hackathon 2022', description: 'Built a software soluton to find the closest location to donate essential resources to the needy', position: '1st Place', github : ''},
        {id: 5, imageURL:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.DPpY83MVkbhoy6zawqddPAHaD4%3Fpid%3DApi&f=1&ipt=34aa593bb94d9ddbe1e0b0495d00f2995ac3dce231acfddd114cb7876df0e9bd&ipo=images', companyName:'Wits Cyber CTF', description: 'The Wits Cyber CTF hosted an internal hackathon between wits student to complete as many as possible CTF challenges within 3-4 days', position: '6th  Position', github:''},
        {id: 6, imageURL:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.MChF7XDJnpx1WRRBWPPwIAHaEK%3Fpid%3DApi&f=1&ipt=a7041417983143bf702c87e019eee4cde9c4169849204082430bd820b5d3c70a&ipo=images', companyName:'IBM Z Datathon', description: 'Building a mathematical model to process, analyze the data on Socio-Economic Issues', position: 'Participant', github:''},
        {id: 7, imageURL:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.QwEzXMkYQddAgNCVVBLWeAHaDe%3Fpid%3DApi&f=1&ipt=a0bcf13a6ccb9577ff669cdd3d4201cacb6e09315157f2fcaed1addb04900269&ipo=images', companyName:'Retro Rabbit', description: 'Built a ticket sales website', position: 'Participant', github:''},
        
    ];

    return (
        <div className="hackathons-container">
            <Background3D />
            <TopBar />
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

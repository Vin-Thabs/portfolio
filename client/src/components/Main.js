/**
 * Author: Thabiso Mahlaola
 * File: Main.js
 * Description: Main Component, 
 */

import Items from './Items';
import Background3D from './Background3D';
import '../styles/Main.css';

export default function Main() {
    const items_tiles = [
        { id: 1, name: 'Projects', description: 'A collection of applications I have built.' },
        { id: 2, name: 'Skills', description: 'Technical and soft skills I have developed.' },
        { id: 3, name: 'Working Experience', description: 'Professional work roles and responsibilities.' },
        { id: 4, name: 'Hackathons', description: 'Competitions and hackathon achievements.' },
        { id: 5, name: 'Interests', description: 'Topics and activities I enjoy exploring.' },
    ];

    return (
       <div className="main-wrapper">
            <Background3D />

            <main className="main-content">
                {items_tiles.map(item => (
                    <Items 
                        key={item.id} 
                        name={item.name} 
                        description={item.description} 
                    />
                ))}
            </main>
        </div>
    );
}

/**
 * Author: Thabiso Mahlaola
 * File: Main.js
 * Description: Main Component, 
 */

import Items from './Items';
import '../styles/Main.css';
export default function Main()
{
    const items_tiles = [
        { id: 1, name: 'Projects'},
        { id: 2, name: 'Skills'}, 
        { id: 3, name: 'Working Experience'}, 
        { id: 4, name: 'Hackathons'}, 
        { id: 5, name: 'Interests'}
    ];
    return(
        <main className="main-content">
            {items_tiles.map(item => 
                <Items name={item.name}/>
            )}
        </main>
    )
}
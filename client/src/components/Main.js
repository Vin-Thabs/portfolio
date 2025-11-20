/**
 * Author: Thabiso Mahlaola
 * File: Main.js
 * Description: Main Component, 
 */

import Items from './Items';
import Background3D from './Background3D';
import '../styles/Main.css';
import { useState } from 'react';
import {items_tiles} from './Utils/data';
import { ContentMaps } from './Utils/ContentMap';


export default function Main() {

    const [selected, setSelected] = useState(null);

    function HandleClick(content)
    {
        setSelected(content);
    }
    function MainContent() {

        return(
            <div className="main-wrapper">
            <Background3D />

            <main className="main-content">
                {items_tiles.map(item => (
                    <Items 
                        key={item.id} 
                        name={item.name} 
                        description={item.description} 
                        onClick={() => HandleClick(item.name)}
                    />
                ))}
            </main>
        </div>
        )
    }

    const ContentMap = ContentMaps;

    return (
        selected === null
      ? <MainContent /> 
      : ContentMap[selected]
    );
}

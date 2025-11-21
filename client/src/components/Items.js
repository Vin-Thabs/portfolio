/**
 * Author: Thabiso Mahlaola
 * FIle: Item.js
 * Description: a tile option and the description of what the item is about
 */

import '../styles/Items.css';

export default function Items({ name, description, onClick }) {
    return (
        <section className="item-tile" onClick={onClick}>
            <h2 className="item-title">{name}</h2>
            <p className="item-description">{description}</p>
        </section>
    );
}


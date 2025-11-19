/**
 * Author: Thabiso Mahlaola
 * FIle: Item.js
 * Description: a tile option and the description of what the item is about
 */

import '../styles/Items.css';

export default function Items({ name, description }) {
    return (
        <section className="item-tile">
            <h2 className="item-title">{name}</h2>
            <p className="item-description">{description}</p>
        </section>
    );
}

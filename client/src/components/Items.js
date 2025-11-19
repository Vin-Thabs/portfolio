/**
 * Author: Thabiso Mahlaola
 * FIle: Item.js
 * Description: a tile option and the description of what the item is about
 */

import '../styles/Items.css';

export default function Items({name})
{
    return(
        <section className="item-section">
            <h3 className="item-tittle">{name}</h3>
        </section>
    )
}
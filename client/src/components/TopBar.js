/**
 * Author: Thabiso Mahlaola
 * 
 */


import menuIcon from '../icons/menu.svg';
import profile from '../icons/profile-circle.svg';
import '../styles/TopBar.css';

export default function TopBar()
{
    return(
       <div className="TopBar-container">
            <img alt="menu" src={menuIcon} className="menu-icon" />
            <h1 className='dashboard-tittle'>Dashboard</h1>
            <img alt='profile-picture' src={profile} data-tooltip="About Me" className='profile-icon' />
       </div>
    )
}


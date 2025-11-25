import menuIcon from '../icons/menu.svg';
import profile from '../icons/profile-circle.svg';
import '../styles/TopBar.css';

export default function TopBar() {
    return (
        <div className="TopBar-container">
            <img alt="menu" src={menuIcon} className="menu-icon" title='Menu' />
            <h1 className='dashboard-title'>Dashboard</h1>
            <img alt='profile' src={profile} className='profile-icon' title="About Me" />
        </div>
    );
}

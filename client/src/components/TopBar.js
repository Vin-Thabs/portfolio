import menuIcon from '../icons/menu.svg';
// import profile from '../icons/profile-circle.svg';
import '../styles/TopBar.css';
import { useNavigate } from "react-router-dom";
export default function TopBar() {
    const navigate = useNavigate();
    function handleClick()
    {
        navigate('/aboutme');
    }
    return (
        <div className="TopBar-container">
            <img alt="menu" src={menuIcon} className="menu-icon" title='About Me' onClick={()=> handleClick()} />
            <h1 className='dashboard-title'>Dashboard</h1>
            {/* <img alt='profile' src={profile} className='profile-icon' title="About Me" /> */}
        </div>
    );
}

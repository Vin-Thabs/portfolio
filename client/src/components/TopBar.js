import menuIcon from '../icons/menu.svg';
import '../styles/TopBar.css';
import { useNavigate } from "react-router-dom";

export default function TopBar() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/aboutme');
    }

    return (
        <div className="TopBar-container">
            <img 
                alt="menu"
                src={menuIcon}
                className="menu-icon"
                title="About Me"
                onClick={handleClick}
            />

            <p className='dev-ingo'>Thabiso Mahlaola</p>
        </div>
    );
}

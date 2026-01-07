import { useState } from "react";
import menuIcon from '../icons/menu.svg';
import '../styles/TopBar.css';
import { useNavigate } from "react-router-dom";

export default function TopBar() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    const goTo = (path) => {
        navigate(path);
        setOpen(false); 
    };

    return (
        <div className="TopBar-container">
            <img 
                alt="menu"
                src={menuIcon}
                className="menu-icon"
                title="Menu"
                onClick={toggleMenu}
            />

            <p className='dev-ingo'>Thabiso Mahlaola</p>

            {open && (
                <div className="dropdown-menu">
                    <p onClick={() => goTo('/main')}>Home</p>
                    <p onClick={() => goTo('/Projects')}>Projects</p>
                    <p onClick={() => goTo('/WorkingExperience')}>Working Experience</p>
                    <p onClick={() => goTo('/Skills')}>Skills</p>
                    <p onClick={() => goTo('/Hackathons')}>Hackathons</p>
                    {/* <p onClick={() => goTo('/AboutMe')}> About Me</p> */}
                </div>
            )}
        </div>
    );
}

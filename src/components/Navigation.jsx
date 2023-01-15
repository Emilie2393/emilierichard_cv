import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Navigation.scss"
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { FaCode } from "react-icons/fa";



const Navigation = () => {

    const [showNav, setShowNav] = useState(false)

    const handleShowNav = () => {
        setShowNav(!showNav)
    }

    showNav ? disableBodyScroll(document) : enableBodyScroll(document)

    return (
        
        <nav className={`nav ${showNav ? "open" : ""}`}>
            <FaCode/>
            <div className="nav__links">
                <Link to="/" className="nav__links__main"><p>Accueil</p></Link>
                <Link to="/skills" className="nav__links__skills"><p>Portfolio</p></Link>
                <Link to="/hobbies" className="nav__links__hobbies"><p>Hobbies</p></Link>
                <Link to="/contact" className="nav__links__contact"><p>Contact</p></Link>
            </div>
            <button className="nav__burger" onClick={handleShowNav}>
                    <div className="nav__burger__bar"></div>
            </button>
        </nav>
    );
};

export default Navigation;
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
        <div className={`nav ${showNav ? "nav__open" : "nav__hidden"} `}>
            <FaCode/>
            <button className="nav__burger" onClick={handleShowNav}>
                <div className="nav__burger__bar"></div>
            </button>
            <Link to="/" className="nav__home"><p>Accueil</p></Link>
            <Link to="/skills" className="nav__skills"><p>Portfolio</p></Link>
            <Link to="/hobbies" className="nav__hobbies"><p>Hobbies</p></Link>
            <Link to="/contact" className="nav__contact"><p>Contact</p></Link>
        </div>
    );
};

export default Navigation;
import { Link } from "react-router-dom";
import "../styles/components/Navigation.scss"


const Navigation = () => {
    return (
        <div className="nav back">
            <Link to="/" className="nav__home"><p>Accueil</p></Link>
            <Link to="/skills" className="nav__skills"><p>Portfolio</p></Link>
            <Link to="/hobbies" className="nav__hobbies"><p>Hobbies</p></Link>
            <Link to="/contact" className="nav__contact"><p>Contact</p></Link>
        </div>
    );
};

export default Navigation;
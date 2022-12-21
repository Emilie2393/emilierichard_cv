import { Link } from "react-router-dom";
import photo_moi from "../media/moi.jpg"
import "../styles/components/Navigation.scss"


const Navigation = () => {
    return (
        <div className="nav back">
            <Link to="/" className="nav__home">Accueil</Link>
            <Link to="/skills" className="nav__skills">Mes compétences</Link>
            <img className = "nav__image" src={photo_moi} alt="moi" />
            <Link to="/hobbies" className="nav__hobbies">Mon univers</Link>
            <Link to="/contact" className="nav__contact">Contact</Link>
        </div>
    );
};

export default Navigation;
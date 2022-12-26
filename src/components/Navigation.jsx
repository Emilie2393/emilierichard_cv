import { Link } from "react-router-dom";
import photo_moi from "../media/moi.jpg"
import "../styles/components/Navigation.scss"


const Navigation = () => {
    return (
        <div className="nav back">
            <Link to="/" className="nav__home"><p>Accueil</p></Link>
            <Link to="/skills" className="nav__skills"><p>Mes compétences</p></Link>
            <img className = "nav__image" src={photo_moi} alt="moi" />
            <Link to="/hobbies" className="nav__hobbies"><p>Mon univers</p></Link>
            <Link to="/contact" className="nav__contact"><p>Contact</p></Link>
        </div>
    );
};

export default Navigation;
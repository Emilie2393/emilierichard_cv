import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Link to="/" className="nav__home">Accueil</Link>
            <Link to="/skills" className="nav__skills">Compétences</Link>
            <Link to="/hobbies" className="nav__hobbies">Mon univers</Link>
            <Link to="/contact" className="nav__contact">Contact</Link>
        </div>
    );
};

export default Navigation;
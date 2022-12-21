import {portfolio} from '../../data/skills'
import "../../styles/components/SkillsCard.scss"
import { useNavigate } from "react-router-dom";


const SkillsCard = () => {

  let navigate = useNavigate();
  const initId = (id) => {
    navigate("/skills/" + id);
  };

  return (
    <div>
      <ul className="skills">
        {portfolio.map((skills) => (
          <li key={skills.id} className="skills__card">
            <h1 className="skills__card__title">{skills.title}</h1>
            <p className='skills__card__description'>{skills.description}</p>
            <div className='skills__card__link' onClick={() => initId(skills.id)}> + </div> 
            <img
              className="skills__card__pictures"
              src={skills.cover}
              alt={`${skills.title} cover`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
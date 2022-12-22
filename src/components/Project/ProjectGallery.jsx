import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import "../../styles/components/ProjectGallery.scss"

function ProjectGallery({ pictures }) {
  // on initialise picture à 0 //
  const [picture, setPicture] = useState(0);
  // fonction qui passe à l'image précédente avec la flèche gauche, si l'image est la première on affiche la dernière image de la liste //
  const leftPictures = () => {
    const firstPicture = picture === 0;
    const newPicture = firstPicture ? pictures.length - 1 : picture - 1;
    setPicture(newPicture);
  };
  // fonction qui passe à l'image suivante avec la flèche droite, si l'image est la dernière on affiche la première image de la liste //
  const rightPictures = () => {
    const lastPicture = picture === pictures.length - 1;
    const newPicture = lastPicture ? 0 : picture + 1;
    setPicture(newPicture);
  };

  // si il n'y a qu'une image les flèches disparaissent //
  return (
    <div className="project__slides">
      <div className="project__slides__pictures">
        <img src={pictures[picture]} alt="images de l'appartement" />
      </div>
      <div className={pictures.length <= 1 ? "project__slides__hiddenvector" : "project__slides__vectorleft"} onClick={leftPictures}><FaArrowLeft/></div>
      <div
        className={
          pictures.length <= 1
            ? "project__slides__hiddenvector"
            : "project__slides__vectorright"
        } onClick={rightPictures}
      > <FaArrowRight/> </div>
    </div>
  );
}


export default ProjectGallery;
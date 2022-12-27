import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../../styles/components/ContactCard.scss";
import moi from '../../media/moi.jpg'

const ContactCard = () => {
  return (
    <div>
      <div className="contact">
        <h1>N'hésitez pas à me contacter :</h1>
        <div className="contact__card">
          <img className="contact__card__img" src={moi} alt="mon visage"/>
          <div className="contact__card__phone">
            <FaPhoneAlt />
            <p>06 59 71 89 01</p>
          </div>
          <div className="contact__card__mail">
            <FaEnvelope />
            <p>emilie.rich4rd@gmail.com</p>
          </div>
          <div className="contact__card__local">
            <FaMapMarkerAlt />
            <p>Disponible sur Rennes et en remote</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

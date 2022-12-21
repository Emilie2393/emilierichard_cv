import React from 'react';
import '../styles/components/Footer.scss'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <div className='Footer'>
                <a href="https://github.com/Emilie2393">
                    <FaGithub/>
                </a>
                <a href="mailto:emilie.rich4rd@gmail.com">
                    <FaEnvelope/>
                </a>
                <a href="https://www.linkedin.com/in/%C3%A9milie-richard-b394ba150/">
                    <FaLinkedin/>
                </a>
                
            
            </div>
        </div>
    );
};

export default Footer;
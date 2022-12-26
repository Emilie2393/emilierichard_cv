import React from 'react';
import Navigation from '../components/Navigation';
import HobbiesCard from '../components/Hobbies/HobbiesCard';
import Footer from '../components/Footer';
import '../styles/pages/Hobbies.scss'

const Hobbies = () => {
    return (
        <div>
            <Navigation/>
            <h1>Dis moi quel cinéma tu aimes, je te dirai qui tu es !</h1>
            <HobbiesCard/>
            <Footer/>

        </div>
    );
};

export default Hobbies;
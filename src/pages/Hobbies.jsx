import React from 'react';
import Navigation from '../components/Navigation';
import HobbiesCard from '../components/Hobbies/HobbiesCard';
import Footer from '../components/Footer';
import '../styles/pages/Hobbies.scss'

const Hobbies = () => {
    return (
        <div>
            <Navigation/>
            <HobbiesCard/>
            <Footer/>

        </div>
    );
};

export default Hobbies;
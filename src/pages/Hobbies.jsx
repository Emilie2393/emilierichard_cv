import React from 'react';
import Navigation from '../components/Navigation';
import HobbiesCard from '../components/Hobbies/HobbiesCard';

const Hobbies = () => {
    return (
        <div>
            <Navigation/>
            <h1>page hobbies</h1>
            <HobbiesCard/>
        </div>
    );
};

export default Hobbies;
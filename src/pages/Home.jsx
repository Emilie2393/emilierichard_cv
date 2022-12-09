import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Navigation/>
            <h1>Ici, commence ma présentation</h1>
            <h2>Je m'appelle Emilie Richard, et je recherche un poste de Développeur Front-End en alternance</h2>
            <p className='home__text'>Issue d'un parcours professionnel dans le secteur administratif et immobilier, 
            je me reconvertis aujourd'hui dans le développement informatique. Cet univers m'intéresse depuis mon adolescence, mais quand j'ai choisi mes études supérieurs en 2012, je me suis dirigé 
            vers le secteur de l'administratif. Mes 10 ans d'expériences professionnelles m'ont apportés beaucoup en terme de connaissance
            du monde de l'entreprise. </p>
            <p>Désormais les méthodes d'organisation, de gestion de projet et de relation client n'ont plus de secrets pour moi, et j'ai pu faire de très belles
            rencontres aussi bien avec mes collègues, qu'avec mes clients au fur et à mesure des années. </p>
            <p> Pendant la période du COVID 19 que nous connaissons tous, j'ai été placé en chomage partiel puis en télétravail pendant 1 an. Durant cette période j'ai réfléchi à mon parcours professionnel
            et j'ai profité de cette période inhabituelle de temps libre pour me renseigner puis me former seule au développement informatique. J'ai pu étudier le 
            language Python dans un premier temps sur la plateforme MOOC et avec l'aide de mon père qui développe des logiciels depuis une trentaine d'années. Puis j'ai pris 
            contact avec OPENCLASSROOMS pour pousser le projet plus loin. 
            En 2021 je prend la décision de quitter mon poste en CDI pour changer de vie professionnelle. Aujourd'hui j'ai validé un Titre RNCP de niveau 5 Développeur Web, et je me présente devant vous
            pour poursuivre cette voie et apporter le maximum à votre entreprise. Bienvenue sur mon site !
             </p>
        </div>
    );
};

export default Home;
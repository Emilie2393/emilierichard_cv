import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/pages/Home.scss";


const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="home">
        <div className="home__firstpart">
          <div className="home__firstpart__img">
            <div className="home__firstpart__img__filter"></div>
          </div>
          <div className="home__firstpart__text">
            <h1 className="home__firstpart__title">Bienvenue</h1>
            <h2>
              Je m'appelle Emilie Richard, et je recherche un poste de
              Développeur Junior
            </h2>
            <a href="../../CV.pdf" download>Télécharger mon CV</a>
          </div>
          
        </div>
        <div className="home__secondpart">
          <div className="home__secondpart__img">
            <div className="home__secondpart__img__filter"></div>
          </div>
          <div className="home__secondpart__text">
            <p>
              Issue d'un parcours professionnel dans le secteur administratif et
              immobilier, je me reconvertis aujourd'hui dans le développement
              web. Mes 10 ans d'expériences professionnelles m'ont apportés 
              beaucoup en termes de connaissances du monde de l'entreprise. Aujourd'hui j'ai le sentiment d'avoir fait 
              le tour des activités administratives. Les challenges techniques sont 
              désormais mon moteur.
            </p>
          </div>
        </div>
        <div className="home__thirdpart">
        <div className="home__thirdpart__img">
            <div className="home__thirdpart__img__filter"></div>
          </div>
          <div className="home__thirdpart__text">
            <p>
              Pendant la période du COVID 19, j'ai été
              en chomage partiel puis en télétravail pendant 1 an. Durant
              cette période j'ai réfléchi à mon parcours professionnel et j'ai
              profité de cette période inhabituelle de temps libre pour me
              renseigner puis me former seule au développement informatique.
            </p>
          </div>
        </div>
        <div className="home__fourthpart">
        <div className="home__fourthpart__img">
        <div className="home__fourthpart__img__filter"></div>
          </div>
          <div className="home__fourthpart__text">
            <p>
              J'ai pu étudier le langage Python dans un premier temps sur la
              plateforme MOOC. Puis j'ai pris contact avec OPENCLASSROOMS pour
              pousser le projet plus loin. En 2021 je prend la décision de
              quitter mon CDI pour changer de vie professionnelle.
              Aujourd'hui j'ai validé un titre RNCP de niveau 5 Développeur Web
              et je me présente devant vous pour poursuivre cette voie et
              apporter le maximum à votre entreprise. 
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;

import React from "react";
import "../styles/machines.scss";
import Navbar from "../components/Navbar";

const Machines = () => {
  return (
    <div id="machines">
      <Navbar></Navbar>
      <h2>Rabotteuse Dégauchisseuse HAMMER A3 / 31</h2>
      <div>
        <p>
          Ensemble de machines à bois d&apos;occasion en excellent état de
          fabrication autrichienne
        </p>
      </div>
      <div id="info-container">
        
          <img
            src={require("../utils/rabotdegau1.jpg")}
            alt="Rabot-Dégau"
            title="Raboteuse-Dégauchisseuse"
          ></img>
<div className="txt-voir">
          <ul>
            <li>Largeur de dégau 310 mm</li>
            <li>Tables en fonte grise longueur 1400 mm</li>
            <li>Arbre à 3 fers système Hammer</li>
            <li>Epaisseur de rabottage 4mm maxi par passe</li>
            <li>Hauteur de rabottage 224mm maxi</li>
            <li>Poids 290kg</li>
            <li>Vernier hauteur de rabottage précision 0.1mm</li>
            <li>moteur 4CV triphasé</li>
            <li>Mortaiseuse jeu de mèches de 8 à 16mm</li>
            <li>Diamètre raccord du tuyau aspiration 120mm</li>
          </ul>
          <br></br>
          <a
            className="voir-site"
            href="https://www.youtube.com/watch?v=rznvmCzA2e8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir démo HAMMER A3-31
          </a>
        </div>
      </div>
      <div id="images">
        <span>
          <img
            src={require("../utils/rabotdegau2.jpg")}
            alt="Rabot-Dégau"
            title="Vernier précision 0.1mm"
          ></img>
          <img
            src={require("../utils/rabotdegau4.jpg")}
            alt="Rabot-Dégau"
            title="Inclinaison du guide"
          ></img>
        </span>
        <span>
          <img
            src={require("../utils/rabotdegau5.jpg")}
            alt="Rabot-Dégau"
            title="Adaptation mortaiseuse"
          ></img>
          <img
            src={require("../utils/rabotdegau7.jpg")}
            alt="Rabot-Dégau"
            title="Jeu de mèches de mortaiseuse"
          ></img>
        </span>
        <span>
          <img
            src={require("../utils/rabotdegau6.jpg")}
            alt="Rabot-Dégau"
            title="Raboteuse-Dégauchisseuse"
          ></img>
        </span>
      </div>
    </div>
  );
};

export default Machines;

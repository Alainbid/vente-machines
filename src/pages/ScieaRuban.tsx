import React from 'react';
import Navbar from '../components/Navbar';


const ScieaRuban = () => {
  return (
    <div id="machines">
      <Navbar></Navbar>
      <h2>Scie à ruban - HAMMER N-4400</h2>
      <div>
        <p>
          Ensemble de machines à bois d&apos;occasion en excellent état de
          fabrication autrichienne
        </p>
      </div>
      <div id="info-container">
      
        <img
          src={require("../utils/scieruban1.jpg")}
          alt="Scie à Ruban"
          title="Scie à Ruban"
        ></img>
<div className="txt-voir">
        <ul>
          <li>Longueur de lame 4400 mm</li>
          <li>Volants fonte grise</li>
          <li>Largeur  de coupe 420 mm</li>
          <li>Hauteur  de coupe 310 mm</li>
          <li>vitesse  de coupe 920 m/mn</li>
          <li>Table en fonte de 420x575 mm</li>
          <li>Guide protecteur toupie max: 220 mm</li>
          <li>Table de scie inclinable 45°</li>
          <li>moteur 4CV triphasé</li>
           <li>Poids 170kg</li>
          <li>Diamètre raccord aspiration 120mm</li>
          <li>Montée sur roulettes avec frein</li>
        </ul>
        <a
            className="voir-site"
            href="https://www.felder-group.com/fr-fr/produits/scies-a-ruban-c1958/scie-a-ruban-classic-line-p144120"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le site HAMMER
          </a>
          </div>
      </div>
      <div id="images">
      <span>
      
          <img
          src={require("../utils/scieruban4.jpg")}
          alt="Scie à ruban"
          title="Scie à ruban"
        ></img>
          <img
          src={require("../utils/scieruban2.jpg")}
          alt="Scie à ruban"
          title="Scie à ruban"
        ></img>
       <img
          src={require("../utils/scieruban3.jpg")}
          alt="Scie à ruban"
          title="Scie à ruban"
        ></img>
       </span>
       <span>
     

     </span>
      </div>
    </div>
  );

};

export default ScieaRuban;
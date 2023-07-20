import React from 'react';
import Navbar from '../components/Navbar';
import "../styles/machines.scss";

const ScieOnglet = () => {

    return (
      <div id="machines">
        <Navbar></Navbar>
        <h2>Scie à onglets - FESTOOL EB 120</h2>
        <div>
          {/* <p>
            Ensemble de machines à bois d&apos;occasion en excellent état de
            fabrication allemande
          </p> */}
        </div>
        <div id="info-container">
        
          <img
            src={require("../utils/ks120eb0.jpg")}
            alt="Scie à onglets"
            title="Scie à onglets"
          ></img>
  <div className="txt-voir">
          <ul>
            <li>Diamètre de lame 260 mm</li>
            <li>Largeur  de coupe jusqu&apos;à 305x88 mm</li>
            <li>Hauteur  de coupe 120 mm</li>
            <li>Angle d&apos;inclinaison 47°/47°</li>
            <li>Angle coupe d&apos;onglet 50°/60°</li>
            <li>Longueur du cable 3m50</li>
            <li>moteur 1600w 220v monophasé</li>
             <li>Poids 25kg</li>
            <li>Diamètre raccord aspiration 27/36mm</li>
            <li>Montée sur meuble avec roulettes et frein</li>
          </ul>
          <br></br>
          <a
            className="voir-site"
            href="https://youtu.be/hnGEKFhneVM"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir démo FESTOOL
          </a>
          </div>
        </div>
        <div id="images">
        <span>
        
            <img
            src={require("../utils/ks120eb2.jpg")}
            alt="Scie à onglet"
            title="Montée sur meuble"
          ></img>
            <img
            src={require("../utils/ks120eb1.jpg")}
            alt="Scie à onglet"
            title="Guidage laser"
          ></img>
            <img
            src={require("../utils/ks120eb3.jpg")}
            alt="Scie à onglet"
            title="Montée sur meuble avec roulettes"
          ></img>
       
         </span>
         <span>
      <img
          src={require("../utils/aspirateurscie.jpg")}
          alt="Scie à onglet"
          title="Scie + aspirateur"
        ></img>
      </span>
        </div>
      </div>
    );
  
  };
  
 

export default ScieOnglet;
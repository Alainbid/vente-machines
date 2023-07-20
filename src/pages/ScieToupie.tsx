import React from "react";
import "../styles/machines.scss";
import Navbar from "../components/Navbar";

const ScieToupie = () => {
  return (
    <div id="machines">
      <Navbar></Navbar>
      <h2>Toupie + Scie à panneaux - FELDER KF 500</h2>
      <div>
        <p>
          Ensemble de machines à bois d&apos;occasion en excellent état de
          fabrication autrichienne
        </p>
      </div>
      <div id="info-container">
        <img
          src={require("../utils/ScieToupie4.jpg")}
          alt="Toupie - Scie"
          title="Scie à panneaux"
        ></img>
        <div className="txt-voir">
          <ul>
            <li>Longueur de coupe 2050 mm</li>
            <li>Largeur de coupe 800-1250 mm</li>
            <li>Hauteur de coupe 102 mm</li>
            <li>Ouverture table de toupie 180 mm</li>
            <li>Guide protecteur toupie max: 220 mm</li>
            <li>Lame de scie inclinable 90°/45°</li>
            <li>Inciseur avec jeu de 2 lames carbure</li>
            <li>X-Roll système de guidage breveté</li>
            <li>moteur 4CV triphasé</li>
            <li>Poids 410kg</li>
            <li>Diamètre raccord aspiration 120mm</li>
          </ul>
          <a
            className="voir-site"
            href="https://www.google.com/search?q=FELDER+KF+500&oq=FELDER+KF+500&aqs=chrome..69i57.5504j0j1&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:4f7a0da5,vid:Xmyx0ZmotEQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir démo FELDER KF 500
          </a>
        </div>
      </div>
      <div id="images">
        <span>
          <img
            src={require("../utils/ScieToupie2.jpg")}
            alt="Toupie - Scie"
            title="Adaptation  toupiage"
          ></img>
          <img
            src={require("../utils/ScieToupie8.jpg")}
            alt="Toupie - Scie"
            title="Volant réglage hauteur de lame"
          ></img>
        </span>
        <span>
          <img
            src={require("../utils/ScieToupie7.jpg")}
            alt="Toupie - Scie"
            title="Scie volant inclinaison de la lame"
          ></img>
          <img
            src={require("../utils/ScieToupie6.jpg")}
            alt="Toupie - Scie"
            title="Accesoires et lames de scie"
          ></img>
        </span>
      </div>
    </div>
  );
};

export default ScieToupie;

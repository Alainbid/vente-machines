import React from "react";
import Navbar from "../components/Navbar";
import "../styles/machines.scss";

const Outillages = () => {
  return (
    <div id="machines">
      <Navbar></Navbar>
      <h2>Aspirateur FESTOOL CTL 26E</h2>

      <div id="info-container">
        <img
          src={require("../utils/Aspirateur.jpg")}
          alt="Aspirateur"
          title="Aspirateur"
        ></img>
        <div className="txt-voir">
          <ul>
            <li>Volume max du sac 24l</li>
            <li>Longueur du cable 7.50m</li>
            <li>moteur 1200w 220v monophasé</li>
            <li>Poids 15kg </li>
            <li>Diamètre raccord aspiration 27/36mm</li>
            <li>Avec roulettes </li>
          </ul>
          <br></br>
          <a
            className="voir-site"
            href="https://www.festool.fr/produits/aspirateurs/aspirateurs-mobiles/574947---ctl-26-e-230v"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le site FESTOOL
          </a>
        </div>
      </div>
      <div id="info-container">
        <img
          src={require("../utils/aspi1.jpg")}
          alt="Cyclone d'aspiration"
          title="Container accessoirs"
        ></img>
        <img
          src={require("../utils/aspi0.jpg")}
          alt="Cyclone d'aspiration"
          title="Accessoirs aspirateur Festool"
        ></img>
      </div>

      <h2>Cyclone d&apos;aspiration FELDER AF-12</h2>

      <div id="info-container">
        <img
          src={require("../utils/Cyclone1.jpg")}
          alt="Cyclone d'aspiration"
          title="Cyclone d'aspiration"
        ></img>
        <img
          src={require("../utils/Cyclone2.jpg")}
          alt="Cyclone d'aspiration"
          title="Cyclone d'aspiration"
        ></img>
        <div className="txt-voir">
          <ul>
            <li>Volume max du sac à copeaux 110L</li>
            <li>Dépression 1800Pa</li>
            <li>moteur 1200w 220v monophasé</li>
            <li>Poids 32kg </li>
            <li>Diamètre raccord aspiration 120mm</li>
            <li>Avec roulettes </li>
          </ul>
          <br></br>

          <a
            className="voir-site"
            href="https://www.festool.fr/produits/aspirateurs/aspirateurs-mobiles/574947---ctl-26-e-230v"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le site FELDER
          </a>
        </div>
      </div>

      <h2>Perceuse à colonne OPTIMUM B23 pro</h2>
      <div id="info-container">
        <img
          src={require("../utils/mèches.jpg")}
          alt="Jeu de mèches"
          title="Jeu de mèches"
        ></img>
        <img
          src={require("../utils/Perceuse.jpg")}
          alt="Perceuse à colonne"
          title="Perceuse à colonne"
        ></img>
      </div>
      <div id="info-container">
        <div className="txt-voir">
          <ul>
            <li>Capacité de perçage Ø25mm acier</li>
            <li>Course du mandrin 80mm</li>
            <li>Mandrin cone morse cm2</li>
            <li>moteur 750w 220v monophasé</li>
            <li>Poids 70kg </li>
            <li>Inclinaison de la table 45° </li>
            <li>Orientation de la table 360° </li>
            <li>Nombre de vitesses 12 </li>
            <li>Vitesses de broche 200 à 2440t/mn</li>
            <li>Montée sur table avec roulettes </li>
          </ul>
          <br></br>
        <center>
          <a
            className="voir-site"
            href="https://www.optimachines.com/perceuses-d-etabli/12009-perceuse-detabli-optimum-d23-pro-400v.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le site OPTIMUM
          </a>
          </center>
        </div>
      </div>
      <div id="machines">
        <br></br>
        <h2>Fraiseuse FESTOOL Domino XL DF 700 EQ +</h2>
      </div>
      <div id="images">
        <span>
          <img
            src={require("../utils/domino1.jpg")}
            alt="Outillages"
            title="Fraiseuse Domino"
          ></img>
          <img
            src={require("../utils/domino2.jpg")}
            alt="Outillages"
            title="Container Festool"
          ></img>
        </span>
        </div>
    
      <center>
            <a
              id="domino"
              className="voir-site"
              href="https://www.festool.fr/produits/syst%C3%A8me-d%E2%80%99assemblage-domino/fraiseuses/576426---df-700-eq-plus#Produit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le site FESTOOL  Domino XL
            </a>
            </center>
             
           
      <div id="images">
        <span>
          <img
            src={require("../utils/domino3.jpg")}
            alt="Outillages"
            title="Container Fraiseuse Domino"
          ></img>
          <img
            src={require("../utils/domino6.jpg")}
            alt="Outillages"
            title="Ensemble assemblage Domino"
          ></img>
        </span>
        <span>
          <img
            src={require("../utils/domino5.jpg")}
            alt="Outillages"
            title="Container Festool"
          ></img>
          <img
            src={require("../utils/domino4.jpg")}
            alt="Outillages"
            title="Tenons assemblage Domino"
          ></img>
        </span>
        <br></br>
      </div>
      <div id="machines">
        <h2>Outillage pour toupie</h2>
      </div>
      <div id="images">
        <span>
          <img
            src={require("../utils/Fraiseprofil.jpg")}
            alt="Outillages"
            title="Fraise de profil"
          ></img>
          <img
            src={require("../utils/Fraiseaprofilvariable.jpg")}
            alt="Outillages"
            title="Fraise de profil"
          ></img>
        </span>
        <span>
          <img
            src={require("../utils/Jeudefraises.jpg")}
            alt="Outillages"
            title="Jeu de fraises"
          ></img>
        </span>
        <span>
          <img
            src={require("../utils/fraisederainurage.jpg")}
            alt="Outillages"
            title="Fraise de rainurage"
          ></img>
          <img
            src={require("../utils/Fraiseachantourner.jpg")}
            alt="Outillages"
            title="Fraise à chantourner"
          ></img>
        </span>
      </div>
    </div>
  );
};

export default Outillages;

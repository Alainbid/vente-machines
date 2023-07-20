import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.scss";
import "../styles/app.scss"

const Navbarre = () => {
  return (
    <div className="navbar">
      <div className="navbar_href">
        <NavLink to="/" className="navlk">
          Accueil
        </NavLink>
        <NavLink to="/ScieToupie" className="navlk">
          Scie-Toupie
        </NavLink>
        <NavLink to="/ScieaRuban" className="navlk">
          Scie à Ruban
        </NavLink>
        <NavLink to="/RaboDegau" className="navlk">
          Rabot-Dégau
        </NavLink>
        <NavLink to="/ScieOnglet" className="navlk">
          Scie à Onglets
        </NavLink>
        <NavLink to="/Outillages" className="navlk">
         Outillages
        </NavLink>
      </div>
    </div>
  );
};

export default Navbarre;

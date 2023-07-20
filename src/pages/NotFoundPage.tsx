import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/app.scss";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound-content">
        <h3 >Erreur 404</h3>
        <p>Page inconnue</p>
        <NavLink to="/">
          <i id="fa-h" className="fas fa-home"></i>retour à
          l acceuil
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;

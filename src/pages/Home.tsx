import React from "react";
import Navbarre from "../components/Navbar";
import "../styles/app.scss";
import "../styles/machines.scss";

function Home() {
  return (
    <div className="app">
      <Navbarre />

      <h2>Je vends toutes mes MACHINES à BOIS</h2>
    
      <div id="home-container">
        <img
        id="portrait"
          src={require("../utils/portrait1.jpg")}
          alt="photo"
        ></img>

        <text id="texte" >
           Après 12 ans de travail... J&apos;arrète mon activité de menuiserie<br/>
          Toutes mes machines sont de la marque autrichienne FELDER<br/>
           en excellent état et de grande précision.<br/>

          Au fil des années et des besoins...<br/>
          J&apos;ai acheté beaucoup d&apos;outillages supplémentaires,<br/>
          qui complètent judicieusement les possibilités des machines<br/>
          et permettent de réaliser toutes sortes de travaux.
          
        </text>
    </div>
    </div>
  );
}
export default Home;

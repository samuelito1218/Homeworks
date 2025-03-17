import React from "react";
import { useNavigate } from "react-router-dom";
import BrowserNavigation from "./BrowserNavigation";
import "./Styles.css"
function Home() {
    //const navigate = useNavigate();
    return (
        <div className="container">
          <h1>Bienvenido</h1>
          <p>¿Listo para escuchar?</p>
          

          <div><BrowserNavigation /></div>
        </div>
      );
    }
  
  export default Home;
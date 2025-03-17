import React from "react";
import { useNavigate } from "react-router-dom";
import BrowserNavigation from "./BrowserNavigation";
import "./Styles.css"

const Despedirse = () => {
    
    return (
      <div className="container">
        <h1>¡Gracias por escuchar!</h1>
        
        <div><BrowserNavigation /></div>
      </div>
    );
  };
export default Despedirse;
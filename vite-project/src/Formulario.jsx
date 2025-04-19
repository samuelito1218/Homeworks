import React from "react"
import { useState } from "react"
const Formulario = ({agregarPersona}) =>{
    const [persona,setPersona] = useState({
        nombre: "",
        monto: ""

    });
    
    const handleChange = (e) =>{
        setPersona({...persona,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(
            persona.nombre.trim() === "" ||
            persona.monto.trim() === ""
        ){
            alert("Por favor diligenciar todos los campos")
            return;
        }
        agregarPersona(persona);
        setPersona({nombre : "" , monto : "" })
    };
    return(
        <div className="container">
           <form onSubmit={handleSubmit}>
  Nombre:
  <input type="text" name="nombre" value={persona.nombre} onChange={handleChange} />
  <br />
  Monto a retirar:
  <input type="number" name="monto" value={persona.monto} onChange={handleChange} />
  <br />
  <button type="submit">Agregar a la cola</button>
</form>

        
        </div>
    );
};
export default Formulario;
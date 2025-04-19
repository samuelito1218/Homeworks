import React from "react"
import { useState } from "react"
import { Libros } from "./libros"
const Formulario = ({agregarLibro}) =>{
    const [libro,setLibro] = useState({
        name: "",
        isbn: "",
        author: "",
        editorial:""

    });
    
    const handleChange = (e) =>{
        setLibro({...libro,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(
            libro.name.trim() === "" ||
            libro.isbn.trim() === "" ||
            libro.author.trim() == "" ||
            libro.editorial.trim() == ""
        ){
            alert("Por favor diligenciar todos los campos antes de agregar un nuevo libro a la pila")
            return;
        }
        agregarLibro(libro);
        setLibro({name : "" , isbn : "" , author : "" , editorial : ""})
    };
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                Nombre del libro:
                <input type="text" name="name" value={libro.name} onChange={handleChange} />
                <br />
                ISBN:
                <input type="text" name="isbn" value={libro.isbn} onChange={handleChange}/>
                <br />


                Autor:

                <input type="text " name="author" value={libro.author} onChange={handleChange} />
                <br />

                Editorial:
                <input type="text" name="editorial" value={libro.editorial} onChange={handleChange} />
                <button className="agregacion" type="submit">
                    Agregar Libro
                </button>

               

            </form>
        
        </div>
    );
};
export default Formulario;
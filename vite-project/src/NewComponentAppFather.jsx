import React, { useState } from 'react';
import NewComponentChild from "./NewComponentChild";
import CategoryList from './CategoryList'; // Cambié el import a mayúscula para consistencia
import "./styles.css";

const NewComponent = () => {
    const [categories, setCategories] = useState(["Ciencia Ficción", "Romance", "Motivación"]);

    const addCategory = (category) => {
        if (category.trim() !== "" && !categories.includes(category)) {
            setCategories([...categories, category]);
        }
    };

    return (
        <div className="page-container"> {/* Se asegura de que todo esté dentro del fondo azul */}
            <NewComponentChild onAddCategory={addCategory} />
            <CategoryList categories={categories} />
        </div>
    );
};

export default NewComponent;

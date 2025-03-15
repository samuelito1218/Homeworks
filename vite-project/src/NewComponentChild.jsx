import React, { useState } from 'react';

const NewComponentChild = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== "") {
            onAddCategory(inputValue);
            setInputValue("");
        }
    };

    return (
        <div className="page-container">
            <form className="form-container" onSubmit={handleSubmit}>
                <input
                    className="input-box"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="add-button" type="submit">
                    Agregar Categoría
                </button>
            </form>
        </div>
    );
};

export default NewComponentChild;


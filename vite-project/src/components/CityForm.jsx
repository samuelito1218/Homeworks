import React, { useState } from 'react';

const CityForm = ({ onAddCity }) => {
  const [cityForm, setCityForm] = useState({ name: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityForm.name.trim()) {
      onAddCity(cityForm);
      setCityForm({ name: '' });
    }
  };

  const handleClick = () => {
    if (cityForm.name.trim()) {
      onAddCity(cityForm);
      setCityForm({ name: '' });
    }
  };

  return (
    <div className="city-form-container">
      <h3 className="city-form-title">
        Agregar Ciudad
      </h3>
      <div>
        <input
          type="text"
          placeholder="Nombre de la ciudad"
          value={cityForm.name}
          onChange={(e) => setCityForm({ name: e.target.value })}
          onKeyPress={(e) => e.key === 'Enter' && handleClick()}
          className="city-input"
        />
        <button
          onClick={handleClick}
          className="city-submit-button"
        >
          Agregar Ciudad
        </button>
      </div>
    </div>
  );
};

export default CityForm;

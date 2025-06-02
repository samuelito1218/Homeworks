import React, { useState } from 'react';

const PersonForm = ({ onAddPerson, cities }) => {
  const [personForm, setPersonForm] = useState({
    name: '',
    age: '',
    cityId: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (personForm.name.trim() && personForm.age && personForm.cityId) {
      onAddPerson(personForm);
      setPersonForm({ name: '', age: '', cityId: '' });
    }
  };

  const handleClick = () => {
    if (personForm.name.trim() && personForm.age && personForm.cityId) {
      onAddPerson(personForm);
      setPersonForm({ name: '', age: '', cityId: '' });
    }
  };

  return (
    <div className="person-form-container">
      <h3 className="person-form-title">Agregar Persona</h3>
      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={personForm.name}
          onChange={(e) =>
            setPersonForm({ ...personForm, name: e.target.value })
          }
          className="person-input"
        />
        <input
          type="number"
          placeholder="Edad"
          value={personForm.age}
          onChange={(e) =>
            setPersonForm({ ...personForm, age: e.target.value })
          }
          className="person-input"
        />
        <select
          value={personForm.cityId}
          onChange={(e) =>
            setPersonForm({ ...personForm, cityId: e.target.value })
          }
          className="person-select"
        >
          <option value="">Seleccionar ciudad</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
        <button onClick={handleClick} className="person-submit-button">
          Agregar Persona
        </button>
      </div>
    </div>
  );
};

export default PersonForm;

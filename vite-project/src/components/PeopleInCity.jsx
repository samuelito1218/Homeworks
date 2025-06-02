import React, { useState } from 'react';

const PeopleInCity = ({ cities, getPeopleInCity }) => {
  const [selectedCity, setSelectedCity] = useState('');

  const selectedCityData = cities.find(city => city.id === selectedCity);
  const peopleInSelectedCity = selectedCity ? getPeopleInCity(selectedCity) : [];

  return (
    <div className="people-in-city-container">
      <h3 className="people-in-city-title">
        Personas por Ciudad
      </h3>
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="city-select"
      >
        <option value="">Seleccionar ciudad</option>
        {cities.map(city => (
          <option key={city.id} value={city.id} className="city-option">
            {city.name}
          </option>
        ))}
      </select>

      {selectedCityData && (
        <div className="people-list-section">
          <h4 className="people-list-title">
            Personas en {selectedCityData.name}:
          </h4>
          {peopleInSelectedCity.length === 0 ? (
            <p className="people-list-empty">
              No hay personas en esta ciudad
            </p>
          ) : (
            <div className="people-list-scroll">
              {peopleInSelectedCity.map(person => (
                <div key={person.id} className="person-item">
                  <span className="person-name">{person.name}</span>
                  <span className="person-age"> {person.age}  años</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PeopleInCity;

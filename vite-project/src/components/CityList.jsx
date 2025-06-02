import React from 'react';

const CityList = ({ cities, getPeopleInCity }) => {
  return (
    <div className="city-list-container">
      <h3 className="city-list-title">
         Ciudades ({cities.length})
      </h3>
      {cities.length === 0 ? (
        <p className="city-list-empty">
          No hay ciudades agregadas
        </p>
      ) : (
        <div className="city-list-scroll">
          {cities.map(city => {
            const cityPeopleCount = getPeopleInCity(city.id).length;
            return (
              <div key={city.id} className="city-list-item">
                <span className="city-name">{city.name}</span>
                <span className="city-people-count">
                  {cityPeopleCount} personas
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CityList;

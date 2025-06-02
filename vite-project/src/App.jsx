import React from 'react';
import CityForm from './components/CityForm';
import PersonForm from './components/PersonForm';
import GraphVisualization from './components/GraphVisualization';
import CityList from './components/CityList';
import PeopleInCity from './components/PeopleInCity';
import useGraphData from './useGraphData';
import "./Styles.css"

const App = () => {
  const {
    people,
    cities,
    addCity,
    addPerson,
    getPeopleInCity,
    getCityName,
    generateGraphData
  } = useGraphData();

  return (
    <div className="app-container">
      <div className="app-content">
        <div className="header">
          <h1 className="header-title">Grafo de Amigos y Ciudades</h1>
          <p className="header-subtitle">Conecta personas con sus ciudades</p>
        </div>

        <div className="forms-grid">
          <CityForm onAddCity={addCity} />
          <PersonForm onAddPerson={addPerson} cities={cities} />
        </div>

        <GraphVisualization 
          data={generateGraphData()} 
          cities={cities}
          people={people}
          getPeopleInCity={getPeopleInCity}
          getCityName={getCityName}
        />

        <div className="lists-grid">
          <CityList cities={cities} getPeopleInCity={getPeopleInCity} />
          <PeopleInCity 
            cities={cities} 
            getPeopleInCity={getPeopleInCity} 
          />
        </div>

        <div className="stats-container">
          <h3 className="stats-title">Estadísticas</h3>
          <div className="stats-grid">
            <div className="stat-box city">
              <div className="stat-value">{cities.length}</div>
              <div className="stat-label">Ciudades</div>
            </div>
            <div className="stat-box person">
              <div className="stat-value">{people.length}</div>
              <div className="stat-label">Personas</div>
            </div>
            <div className="stat-box link">
              <div className="stat-value">{people.length}</div>
              <div className="stat-label">Conexiones</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

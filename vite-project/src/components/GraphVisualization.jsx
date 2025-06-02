import React from 'react';
import { Graph } from 'react-d3-graph';

const GraphVisualization = ({ data, cities = [], people = [], getPeopleInCity, getCityName }) => {
  const enhancedData = data
    ? {
        ...data,
        nodes: data.nodes.map(node => {
          const city = cities.find(c => c.id === node.id);
          if (city) {
            return {
              ...node,
              name: city.name,
              color: '#2563eb', 
              fontColor: '#fff',
            };
          }
          const person = people.find(p => p.id === node.id);
          if (person) {
            return {
              ...node,
              name: person.name,
              color: '#8b5cf6',
              fontColor: '#fff',
            };
          }
          return {
            ...node,
            name: node.id,
            color: '#22d3ee', 
            fontColor: '#fff',
          };
        }),
      }
    : data;

  const myConfig = {
    nodeHighlightBehavior: true,
    node: {
      color: '#60a5fa',
      size: 400, 
      highlightStrokeColor: '#fff',
      fontSize: 16,
      fontColor: '#fff',
      fontWeight: 'bold',
      strokeWidth: 2.5,
      strokeColor: '#fff',
      labelProperty: 'name', 
    },
    link: {
      highlightColor: '#22d3ee',
      color: '#22d3ee',
      strokeWidth: 2.5,
      renderLabel: false,
    },
    height: 520,
    width: 1200,
    d3: {
      gravity: -180,
      linkLength: 220,
      linkStrength: 1.2,
    },
    directed: false,
    panAndZoom: true,
    staticGraph: false,
  };

  const SimpleGraphVisualization = () => {
    const connections = people.map(person => ({
      person: person.name,
      city: getCityName(person.cityId),
    }));

    return (
      <div className="simple-graph-container">
        {cities.length === 0 && people.length === 0 ? (
          <div className="empty-message">
            <p>Agrega ciudades y personas para ver las conexiones</p>
          </div>
        ) : (
          <div className="city-people-container">
            <div className="cities-grid">
              {cities.map(city => {
                const cityPeople = getPeopleInCity(city.id);
                return (
                  <div key={city.id} className="city-card">
                    <div className="city-name">{city.name}</div>
                    {cityPeople.length === 0 ? (
                      <div className="no-people">Sin habitantes</div>
                    ) : (
                      <div className="people-list">
                        {cityPeople.map(person => (
                          <div key={person.id} className="person-card">
                            {person.name} ({person.age})
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {connections.length > 0 && (
              <div className="connections-container">
                <h4>Conexiones:</h4>
                <div className="connections-list">
                  {connections.map((conn, index) => (
                    <div key={index} className="connection-item">
                      {conn.person} ↔ {conn.city}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="graph-visualization-wrapper">
      <h3 className="graph-title">Visualización del Grafo</h3>
      <div className="graph-container">
        {enhancedData && enhancedData.nodes && enhancedData.nodes.length > 0 && typeof Graph !== 'undefined' ? (
          <Graph id="graph-id" data={enhancedData} config={myConfig} />
        ) : (
          <SimpleGraphVisualization />
        )}
      </div>
    </div>
  );
};

export default GraphVisualization;
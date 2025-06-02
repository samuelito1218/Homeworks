import { useState } from 'react';

const useGraphData = () => {
  const [people, setPeople] = useState([]);
  const [cities, setCities] = useState([]);

  const addCity = (cityData) => {
    const newCity = {
      id: `city-${Date.now()}`,
      name: cityData.name,
      type: 'city'
    };
    setCities(prev => [...prev, newCity]);
  };

  const addPerson = (personData) => {
    const newPerson = {
      id: `person-${Date.now()}`,
      name: personData.name,
      age: parseInt(personData.age),
      cityId: personData.cityId,
      type: 'person'
    };
    setPeople(prev => [...prev, newPerson]);
  };

  const getPeopleInCity = (cityId) => {
    return people.filter(person => person.cityId === cityId);
  };

  const getCityName = (cityId) => {
    const city = cities.find(c => c.id === cityId);
    return city ? city.name : '';
  };

  const generateGraphData = () => {
    const nodes = [
      ...cities.map(city => ({
        id: city.id,
        name: city.name,
        type: 'city'
      })),
      ...people.map(person => ({
        id: person.id,
        name: `${person.name} (${person.age})`,
        type: 'person'
      }))
    ];

    const links = people.map(person => ({
      source: person.id,
      target: person.cityId
    }));

    return { nodes, links };
  };

  return {
    people,
    cities,
    addCity,
    addPerson,
    getPeopleInCity,
    getCityName,
    generateGraphData
  };
};

export default useGraphData;

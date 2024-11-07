import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

function RicknMorty() {
  const [characters, setCharacters] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const handleNextClick = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => setCharacters(response.data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="app">
      <h1><strong>Rick and Morty</strong></h1>
      <div className="grid">
        {characters.map(character => (
          <div className="character-card" key={character.id}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p className={character.status.toLowerCase()}>{character.status} - {character.species}</p>
            <p><strong>Last known location:</strong> {character.location.name}</p>
            <p><strong>First seen in:</strong> {character.origin.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RicknMorty;

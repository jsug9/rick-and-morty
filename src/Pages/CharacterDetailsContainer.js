import React from 'react';

const CharacterDetailsContainer = () => {
  const character = {
    id: '1',
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: 'Homo Sapiens',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  };

  return (
    <div className="character-details-container">
      <h1>{character.name}</h1>
      <div className="character-details">
        <img src={character.image} alt="character" className="details-image" />
        <div className="character-info">
          <p>
            Status:
            {' '}
            <span>
              {character.status}
            </span>
          </p>
          <p>
            Species:
            {' '}
            <span>
              {character.species}
            </span>
          </p>
          <p>
            Type:
            {' '}
            <span>
              {character.type}
            </span>
          </p>
          <p>
            Gender:
            {' '}
            <span>
              {character.gender}
            </span>
          </p>
        </div>
      </div>
      <button type="button" className="favorites-button">
        Add to Favorites
      </button>
    </div>
  );
};

export default CharacterDetailsContainer;

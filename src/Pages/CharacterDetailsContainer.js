import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addFavorite } from '../Redux/characters/CharactersReducer';

const CharacterDetailsContainer = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { character } = location.state;

  const handleClick = () => {
    dispatch(addFavorite(character));
  };

  const type = () => (character.type ? character.type : 'No information');

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
              {type()}
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
      <button
        type="button"
        className="favorites-button"
        onClick={handleClick}
      >
        Add to Favorites
      </button>
    </div>
  );
};

export default CharacterDetailsContainer;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CharacterItem from './CharacterItem';

const CharactersList = (props) => {
  const { characters, searchCharacter } = props;
  const [visibleCharacters, setVisibleCharacters] = useState(characters);

  useEffect(() => {
    setVisibleCharacters(characters);
  }, [characters]);

  useEffect(() => {
    const cleanSearchTerm = searchCharacter.toLowerCase().trim();
    setVisibleCharacters(characters.filter((character) => {
      const characterName = character.name.toLowerCase();
      return characterName.includes(cleanSearchTerm);
    }));
  }, [searchCharacter]);

  return (
    <div className="characters-list">
      {visibleCharacters?.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    type: PropTypes.string,
    gender: PropTypes.string,
    image: PropTypes.string,
    isFavorite: PropTypes.bool,
  })).isRequired,
  searchCharacter: PropTypes.string.isRequired,
};

export default CharactersList;

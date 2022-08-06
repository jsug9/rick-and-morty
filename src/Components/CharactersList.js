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
        <CharacterItem key={character.id} name={character.name} image={character.image} />
      ))}
    </div>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    isFavorite: PropTypes.bool,
  })).isRequired,
  searchCharacter: PropTypes.string.isRequired,
};

export default CharactersList;

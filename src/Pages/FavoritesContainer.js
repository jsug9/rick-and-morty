import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { getFavorites } from '../Redux/characters/CharactersReducer';
import CharactersList from '../Components/CharactersList';
import SearchItem from '../Components/SearchItem';

const FavoritesContainer = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  const [searchCharacter, setSearchCharacter] = useState('');

  const updateSearchCharacter = (e) => {
    setSearchCharacter(e.target.value);
  };

  const renderCharacters = () => {
    if (characters?.length === 0) return <p>No Favorites Added</p>;
    return (
      <CharactersList characters={characters} searchCharacter={searchCharacter} />
    );
  };

  return (
    <div className="characters-container">
      <h1>Favorites</h1>
      <SearchItem item="Character" searchItem={searchCharacter} updateSearchItem={updateSearchCharacter} />
      {renderCharacters()}
    </div>
  );
};

export default FavoritesContainer;

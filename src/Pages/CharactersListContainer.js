import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getCharacters } from '../Redux/characters/CharactersReducer';
import CharactersList from '../Components/CharactersList';
import SearchItem from '../Components/SearchItem';

const CharactersListContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.characters);
  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  const [searchCharacter, setSearchCharacter] = useState('');

  const updateSearchCharacter = (e) => {
    setSearchCharacter(e.target.value);
  };

  const characters = [...state];

  return (
    <div className="characters-container">
      <h1>Characters</h1>
      <SearchItem item="Character" searchItem={searchCharacter} updateSearchItem={updateSearchCharacter} />
      <CharactersList characters={characters} searchCharacter={searchCharacter} />
    </div>
  );
};

export default CharactersListContainer;

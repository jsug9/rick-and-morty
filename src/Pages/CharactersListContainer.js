// import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
// import { getCharacters } from '../Redux/characters/CharactersReducer';
import { useQuery, gql } from '@apollo/client';
import CharactersList from '../Components/CharactersList';
import SearchItem from '../Components/SearchItem';

const CharactersListContainer = () => {
  const [searchCharacter, setSearchCharacter] = useState('');

  const updateSearchCharacter = (e) => {
    setSearchCharacter(e.target.value);
  };

  const GET_CHARACTERS = gql`
  query Character($filter: FilterCharacter = { name: "${searchCharacter}" }) {
    characters(filter: $filter) {
      results {
        id
        name
        image
        status
        species
      }
    }
  }
  `;

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      filter: {
        name: searchCharacter,
      },
    },
  });

  const characters = data?.characters?.results;

  const renderCharacters = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
      <CharactersList characters={characters} searchCharacter={searchCharacter} />
    );
  };

  return (
    <div className="characters-container">
      <h1>Characters</h1>
      <SearchItem item="Character" searchItem={searchCharacter} updateSearchItem={updateSearchCharacter} />
      {renderCharacters()}
    </div>
  );
};

export default CharactersListContainer;

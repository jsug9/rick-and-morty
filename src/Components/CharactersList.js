import CharacterItem from './CharacterItem';

const CharactersList = () => {
  const characters = [
    {
      id: 1,
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      isFavorite: true,
    },
    {
      id: 2,
      name: 'Morty Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      isFavorite: true,
    },
    {
      id: 3,
      name: 'Summer Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      isFavorite: false,
    },
    {
      id: 4,
      name: 'Beth Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      isFavorite: false,
    },
    {
      id: 5,
      name: 'Jerry Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
      isFavorite: true,
    },
    {
      id: 6,
      name: 'Mr. Meeseeks',
      image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
      isFavorite: false,
    },
    {
      id: 7,
      name: 'Mr. Meeseeks',
      image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
      isFavorite: true,
    },
  ];

  return (
    <div className="characters-list">
      {characters.map((character) => (
        <CharacterItem key={character.id} name={character.name} image={character.image} />
      ))}
    </div>
  );
};

export default CharactersList;

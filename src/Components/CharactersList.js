const CharactersList = () => {
  const characters = ['Rick', 'Morty', 'Beth', 'Summer', 'Jerry'];

  return (
    <div className="characters-list">
      <ul className="characters-list-ul">
        {characters.map((character) => (
          <li key={character} className="characters-list-li">
            {character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharactersList;

const GET_CHARACTERS = 'Characters/GET_CHARACTERS';
const GET_FAVORITE_CHARACTERS = 'Characters/GET_FAVORITE_CHARACTERS';

const initialState = [
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

let isLoading = false;

const dispatchCharacters = (characters, type) => ({ type, payload: characters });

const getCharacters = () => async (dispatch) => {
  if (isLoading) return;

  const characters = initialState;

  dispatch(dispatchCharacters(characters), GET_CHARACTERS);
  isLoading = true;
};

const getFavorites = () => async (dispatch) => {
  const characters = initialState.filter((character) => character.isFavorite);

  dispatch(dispatchCharacters(characters), GET_FAVORITE_CHARACTERS);
  isLoading = true;
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return action.payload;

    case GET_FAVORITE_CHARACTERS:
      return action.payload;

    default:
      return state;
  }
};

export { GET_CHARACTERS, getCharacters, getFavorites };
export default charactersReducer;

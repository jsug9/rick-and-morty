const GET_FAVORITE_CHARACTERS = 'Characters/GET_FAVORITE_CHARACTERS';
const ADD_FAVORITE_CHARACTER = 'Characters/ADD_FAVORITE_CHARACTER';
const REMOVE_FAVORITE_CHARACTER = 'Characters/REMOVE_FAVORITE_CHARACTER';

const initialState = [];

let isLoading = false;

const getFavorites = () => async (dispatch) => {
  if (isLoading) return;
  const characters = initialState;

  dispatch({
    type: GET_FAVORITE_CHARACTERS,
    payload: characters,
  });
  isLoading = true;
};

const addFavorite = (character) => async (dispatch) => {
  const favoriteCharacter = character;
  favoriteCharacter.isFavorite = true;
  dispatch({
    type: ADD_FAVORITE_CHARACTER,
    payload: favoriteCharacter,
  });
};

const removeFavorite = (character) => async (dispatch) => {
  const favoriteCharacter = character;
  favoriteCharacter.isFavorite = false;
  dispatch({
    type: REMOVE_FAVORITE_CHARACTER,
    payload: favoriteCharacter,
  });
};

const characterIndex = (state, id) => state.findIndex((object) => (object.id === id));

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITE_CHARACTERS:
      return state;

    case ADD_FAVORITE_CHARACTER:
      if (characterIndex(state, action.payload.id) !== -1) {
        return state;
      }
      return [...state, action.payload];

    case REMOVE_FAVORITE_CHARACTER:
      const index = characterIndex(state, action.payload.id); // eslint-disable-line
      if (characterIndex(state, action.payload.id) === -1) {
        return state;
      }
      return [...state.slice(0, index), ...state.slice(index + 1)];

    default:
      return state;
  }
};

export {
  getFavorites,
  addFavorite,
  removeFavorite,
};

export default charactersReducer;

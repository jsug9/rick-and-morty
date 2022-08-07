const GET_CHARACTERS = 'Characters/GET_CHARACTERS';
const GET_FAVORITE_CHARACTERS = 'Characters/GET_FAVORITE_CHARACTERS';

const initialState = [];

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

export {
  GET_CHARACTERS,
  getCharacters,
  getFavorites,
};
export default charactersReducer;

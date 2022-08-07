const GET_FAVORITE_CHARACTERS = 'Characters/GET_FAVORITE_CHARACTERS';
const ADD_FAVORITE_CHARACTER = 'Characters/ADD_FAVORITE_CHARACTER';

const initialState = [];

let isLoading = false;

const dispatchCharacters = (characters, type) => ({ type, payload: characters });

const getFavorites = () => async (dispatch) => {
  if (isLoading) return;
  const characters = initialState;

  dispatch(dispatchCharacters(characters), GET_FAVORITE_CHARACTERS);
  isLoading = true;
};

const addFavorite = (character) => async (dispatch) => {
  const characters = [...initialState, character];

  dispatch({
    type: ADD_FAVORITE_CHARACTER,
    payload: characters,
  });
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITE_CHARACTERS:
      return action.payload;

    case ADD_FAVORITE_CHARACTER:
      return [...state, action.payload];

    default:
      return state;
  }
};

export {
  getFavorites,
  addFavorite,
};
export default charactersReducer;

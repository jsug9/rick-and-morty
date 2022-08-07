const GET_FAVORITE_CHARACTERS = 'Characters/GET_FAVORITE_CHARACTERS';
const ADD_FAVORITE_CHARACTER = 'Characters/ADD_FAVORITE_CHARACTER';

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
  const characters = [...initialState, character];

  dispatch({
    type: ADD_FAVORITE_CHARACTER,
    payload: characters,
  });
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITE_CHARACTERS:
      return state;

    case ADD_FAVORITE_CHARACTER:
      console.log(action.payload);
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

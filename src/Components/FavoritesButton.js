import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../Redux/characters/CharactersReducer';

const FavoritesButton = (props) => {
  const dispatch = useDispatch();
  const { character } = props;

  const handleClick = () => {
    dispatch(addFavorite(character));
  };

  const text = character.isFavorite ? 'Remove from favorites' : 'Add to favorites';

  return (
    <button
      type="button"
      className="favorites-button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

FavoritesButton.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    type: PropTypes.string,
    gender: PropTypes.string,
    image: PropTypes.string,
    isFavorite: PropTypes.bool,
  }).isRequired,
};

export default FavoritesButton;

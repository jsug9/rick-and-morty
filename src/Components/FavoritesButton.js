import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../Redux/characters/CharactersReducer';

const FavoritesButton = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { character } = props;

  const handleClick = () => {
    if (character.isFavorite) {
      dispatch(removeFavorite(character));
      navigate(
        '/favorites',
      );
    } else {
      dispatch(addFavorite(character));
    }
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

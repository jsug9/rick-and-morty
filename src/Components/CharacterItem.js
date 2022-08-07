import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const characterItem = (props) => {
  const { character } = props;

  const navigate = useNavigate();

  const redirect = () => {
    navigate(
      `/${character.id}`,
      { state: { character } },
    );
  };

  return (
    <button
      type="button"
      onClick={redirect}
      className="character-item"
    >
      <img src={character.image} alt="character" className="item-image" />
      <h3>{character.name}</h3>
    </button>
  );
};

characterItem.propTypes = {
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

export default characterItem;

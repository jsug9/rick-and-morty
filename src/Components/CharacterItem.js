import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const characterItem = (props) => {
  const { character } = props;

  return (
    <Link
      to={{
        pathname: `/${character.id}`,
        state: character,
      }}
      className="character-item"
    >
      <img src={character.image} alt="character" className="item-image" />
      <h3>{character.name}</h3>
    </Link>
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

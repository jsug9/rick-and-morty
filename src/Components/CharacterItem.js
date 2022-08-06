import React from 'react';
import PropTypes from 'prop-types';

const characterItem = (props) => {
  const {
    name,
    image,
  } = props;

  return (
    <div className="character-item">
      <img src={image} alt={name} className="item-image" />
      <h3>{name}</h3>
    </div>
  );
};

characterItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default characterItem;

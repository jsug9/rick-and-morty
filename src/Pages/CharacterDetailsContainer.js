// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// const CharacterDetailsContainer = () => {
//   const { character } = useParams();
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state.characters);

//   useEffect(() => {
//     dispatch(getCharacter(character));
//   }, []);

//   return (
//     <div className="character-details-container">
//       <h1>{character.name}</h1>
//     </div>
//   );
// };

const CharacterDetailsContainer = () => (
  <div className="character-details-container">
    <h1>I work</h1>
  </div>
);

export default CharacterDetailsContainer;

import { gql } from '@apollo/client';

const getCharacters = (characters) => gql`
  query Character($filter: FilterCharacter = { name: "${characters}" }) {
    characters(filter: $filter) {
      results {
        id
        name
        status
        species
        type
        gender
        image
      }
    }
  }
  `;

export default getCharacters;

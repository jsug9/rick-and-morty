import PropTypes from 'prop-types';

const ListNicknames = (props) => {
  const { nicknames, order } = props;

  const indexedNicknames = nicknames.map((nickname, id) => ({
    nickname,
    id,
  }));

  const sortedNicknames = () => {
    if (order === 'ASC') {
      return indexedNicknames.sort((a, b) => a.nickname.localeCompare(b.nickname));
    }
    return indexedNicknames.sort((a, b) => b.nickname.localeCompare(a.nickname));
  };

  return (
    <div>
      <ul>
        {sortedNicknames().map(({ nickname, id }) => (
          <li key={id}>{nickname}</li>
        ))}
      </ul>
    </div>
  );
};

ListNicknames.propTypes = {
  nicknames: PropTypes.arrayOf(PropTypes.string).isRequired,
  order: PropTypes.string.isRequired,
};

export default ListNicknames;

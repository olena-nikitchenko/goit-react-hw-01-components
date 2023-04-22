import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section className={css.friendSection}>
      <ul className={css.friendList}>
        {friends.map(item => (
          <li className={css.friendItem} key={item.id}>
            <span
              className={clsx(css.statusItem, {
                [css.isOnline]: item.isOnline,
              })}
            >
              {item.isOnline}
            </span>
            <img
              className={css.imgAvatar}
              src={item.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{item.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

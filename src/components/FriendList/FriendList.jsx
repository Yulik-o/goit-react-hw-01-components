import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export function FriendList({friends}) {
    return (
        <ul className={styles.friendList}>
  {friends.map(({ avatar, name, isOnline, id }) => (
<FriendListItem
key={id}
avatar={avatar}
name={name}
isOnline={isOnline}
/>
  ))}
</ul>
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ),
  };
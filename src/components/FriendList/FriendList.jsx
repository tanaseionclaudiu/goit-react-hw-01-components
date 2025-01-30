import styles from './Friendlist.module.css';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
<ul className={styles['friend-list']}>

{   friends.map( ({ avatar, name, isOnline, id }) => { return (
        <FriendListItem 
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
        )
    })
}
  </ul>
    );
  };
  
  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      }),
    ),
  };
  
  export default FriendList;
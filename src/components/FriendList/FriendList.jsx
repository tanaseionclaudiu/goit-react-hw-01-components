import styles from './Friendlist.module.css';
import FriendListItem from './FriendListItem';

export const FriendList = ({ friends }) => {
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
  
//
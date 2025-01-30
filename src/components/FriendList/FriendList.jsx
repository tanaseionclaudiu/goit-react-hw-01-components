import styles from './Friendlist.module.css';

export const FriendList = ({ friends }) => {
    return (
<ul className={styles['friend-list']}>

{   friends.map( (friend) => { return (
        <li key={friend.id} className={styles.friend}>
            <span className={`${styles['friend-status']}${friend.isOnline ? ` ${styles['online']}` : ''}`}></span>
            <img className={styles['friend-avatar']} src={friend.avatar} alt="User avatar" width="48" />
            <p className={styles['friend-name']}>{friend.name}</p>
          </li>
        )
    })
}
  </ul>
    );
  };
  
//
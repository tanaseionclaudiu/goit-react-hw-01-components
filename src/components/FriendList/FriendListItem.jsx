import styles from './Friendlist.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => (
    <li key={id} className={styles.friend}>
        <span className={`${styles['friend-status']}${isOnline ? ` ${styles['online']}` : ''}`}></span>
        <img className={styles['friend-avatar']} src={avatar} alt="User avatar" width="48" />
        <p className={styles['friend-name']}>{name}</p>
  </li>
  );
  
  export default FriendListItem;
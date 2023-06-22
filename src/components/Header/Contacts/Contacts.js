import styles from './Contacts.module.css';
import call from '../../../assets/images/Call.svg';

export const Contacts = () => {
  return (
    <div className={styles.contactsContainer}>
      <div className={styles.logo}>
        <img src={call}></img>
      </div>
      <div className={styles.numberContainer}>
        <span className={styles.text}>Контакты: </span>
        <span className={styles.number}>+7 (917) 510-57-59</span>
      </div>
    </div>
  );
};

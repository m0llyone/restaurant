import styles from './Auth.module.css';
import auth from '../../../assets/images/Auth.svg';
import { Form } from './Form/Form';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

export const Auth = ({ setActive, isUser, setIsUser, formActive }) => {
  console.log(isUser);
  return (
    <div className={styles.container}>
      <img className={styles.image} src={auth} alt="auth" />
      <span className={styles.text} onClick={() => setActive(true)}>
        Войти
      </span>
    </div>
  );
};

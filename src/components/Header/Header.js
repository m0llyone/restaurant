import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Logo } from './Logo/Logo.js';
import { Contacts } from './Contacts/Contacts';
import { SearchBar } from './SearchBar/SearchBar';
import { Basket } from './Basket/Basket';
import { Burger } from './Burger/Burger';
import { Auth } from './Auth/Auth';
import authIcon from '../../assets/images/Auth.svg';
import { auth } from '../../firebase';
import { SignUp } from './Auth/SignUp/SignUp';
import { Login } from './Auth/Login/Login';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const Header = ({ isShow, setIsShow }) => {
  const [isActive, setIsActive] = useState(true);
  const [formActive, setFormActive] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUser(false);
      } else {
        setIsUser(true);
      }
    });
  }, [formActive]);

  // console.log(isUser);

  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        setIsActive(true);
        navigate('/');
      })
      .catch((err) => {
        // const message = err.message;
      });
  };

  return (
    <>
      <>
        {formActive && (
          <>
            {isActive ? (
              <Login
                setIsActive={setIsActive}
                isActive={isActive}
                active={formActive}
                setActive={setFormActive}
                isUser={isUser}
                setIsUser={setIsUser}
              />
            ) : (
              <SignUp
                setIsActive={setIsActive}
                isActive={isActive}
                active={formActive}
                setActive={setFormActive}
                isUser={isUser}
                setIsUser={setIsUser}
              />
            )}
          </>
        )}
      </>
      <header className={styles.header}>
        <div className={styles.container}>
          <Burger isShow={isShow} setIsShow={setIsShow} />
          <Logo />
          <div className={styles.box}>
            <SearchBar />
            <Contacts />
          </div>

          <>
            {!isUser ? (
              <Auth
                setActive={setFormActive}
                isUser={isUser}
                setIsUser={setIsUser}
                formActive={formActive}
              />
            ) : (
              <div className={styles.authContainer}>
                <img className={styles.image} src={authIcon} alt="auth" />
                <span
                  className={styles.text}
                  onClick={() => setFormActive(true)}
                >
                  Выйти
                </span>
              </div>
            )}
          </>
          <div className={styles.basket}>
            <Basket />
          </div>
        </div>
      </header>
    </>
  );
};

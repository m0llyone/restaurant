import { Form } from '../Form/Form';
import styles from './SignUp.module.css';
import { useState } from 'react';
import { auth } from '../../../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

export const SignUp = ({ active, setActive, setIsActive, isActive }) => {
  const [userAuthData, setUserAuthData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserAuthData({ ...userAuthData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        userAuthData.email,
        userAuthData.password
      );
      setIsActive(true);
    } catch (err) {
      const message = err.message;
      setError(message);
    }
  };

  // const log = async()=>{
  //   const provider = new firebase.auth.GoogleAuthProvider()
  //   const {user} = await auth.signInWithPopup(provider)
  //   console.log(user)}

  return (
    <div>
      <Form
        active={active}
        setIsActive={setIsActive}
        isActive={isActive}
        setActive={setActive}
        onSubmit={onSubmit}
        userAuthData={userAuthData}
        handleChange={handleChange}
        error={error}
        titleButton="SignUp"
        titleSpan="Already have an account?"
      />
    </div>
  );
};

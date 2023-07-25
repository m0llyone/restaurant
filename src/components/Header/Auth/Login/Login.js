import { Form } from '../Form/Form';
import { useEffect, useState } from 'react';
import { auth } from '../../../../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

export const Login = ({ active, setActive, setIsActive, isActive }) => {
  const [userAuthData, setUserAuthData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserAuthData({ ...userAuthData, [name]: value });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    console.log(userAuthData);
    try {
      await signInWithEmailAndPassword(
        auth,
        userAuthData.email,
        userAuthData.password
      );
      setActive(false);
    } catch (err) {
      const message = err.message;
      setError(message);
    }
  };

  return (
    <>
      <div>
        <Form
          active={active}
          setActive={setActive}
          isActive={isActive}
          setIsActive={setIsActive}
          userAuthData={userAuthData}
          handleChange={handleChange}
          onSubmit={onLogin}
          error={error}
          titleButton="Login"
          titleSpan="No account yet ?"
        />
      </div>
    </>
  );
};

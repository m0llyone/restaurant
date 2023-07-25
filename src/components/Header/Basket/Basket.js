import { Link } from 'react-router-dom';
import styles from './Basket.module.css';
import cart from '../../../assets/images/cart.svg';
import { useContext } from 'react';
import { AppContext } from '../../App/App';

export const Basket = () => {
  const { counter } = useContext(AppContext);
  return (
    <Link to="/cart" state="true" className={styles.button}>
      <img className={styles.cart} src={cart} alt="cart" />
      <span className={styles.text}>Корзина </span>
      <span className={styles.counter}>{counter}</span>
    </Link>
  );
};

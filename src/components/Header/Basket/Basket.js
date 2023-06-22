import { Link } from 'react-router-dom';
import styles from './Basket.module.css';
import cart from '../../../assets/images/cart.svg';

export const Basket = () => {
  return (
    <Link to="/cart" state="true" className={styles.button}>
      <img className={styles.cart} src={cart} alt="cart" />
      <span className={styles.text}>Корзина </span>
      <span className={styles.counter}>4</span>
    </Link>
  );
};

import styles from '../FooterNav/FooterNav.module.css';
import { Link } from 'react-router-dom';

export const FooterNav = ({ isShow, setIsShow }) => {
  return (
    <nav
      className={[styles.container, isShow ? styles.active : ' '].join(' ')}
      onClick={() => setIsShow(!isShow)}
    >
      <Link
        onClick={() => setIsShow(!isShow)}
        className={styles.text}
        to="/about"
      >
        О ресторане
      </Link>
      <Link
        onClick={() => setIsShow(!isShow)}
        className={styles.text}
        to="/delivery"
      >
        Условия доставки
      </Link>
      <Link
        onClick={() => setIsShow(!isShow)}
        className={styles.text}
        to="/return-product"
      >
        Возврат товара
      </Link>
      <Link
        onClick={() => setIsShow(!isShow)}
        className={styles.text}
        to="/sales"
      >
        Акции
      </Link>
    </nav>
  );
};

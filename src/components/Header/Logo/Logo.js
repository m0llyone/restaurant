import styles from './Logo.module.css';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      LOGOS
    </Link>
  );
};

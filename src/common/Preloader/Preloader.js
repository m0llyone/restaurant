import preloader from '../../assets/images/Loader.svg';
import styles from './Preloader.module.css';
export const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

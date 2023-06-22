import styles from './Burger.module.css';

export const Burger = ({ isShow, setIsShow }) => {
  return (
    <div className={styles.container}>
      <div className={styles.burger} onClick={() => setIsShow(!isShow)}>
        <span />
      </div>
      <span className={styles.menu}>МЕНЮ</span>
    </div>
  );
};

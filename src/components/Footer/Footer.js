import { Logo } from '../Header/Logo/Logo';
import { FooterNav } from './FooterNav/FooterNav.js';
import styles from '../Footer/Footer.module.css';
import Arrow from '../../assets/images/Arrow-up.svg';
import { Link } from 'react-router-dom';
import { Weather } from './Weather/Weather';

export const Footer = ({ prediction, isShow, setIsShow }) => {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.containerInfo}>
          <button className={styles.button}>
            <img src={Arrow} alt={'Arrow'}></img>
          </button>
          <div className={styles.info}>
            <Logo />
            <span className={styles.text}>
              © ООО СК «АПШЕРОН» Все права защищены. 2010-2020
            </span>
            <Link className={styles.footerLink}>
              Пользовательское отношение
            </Link>
            <Link className={styles.footerLink}>Карта сайта</Link>
            <Link className={styles.footerLink}>
              Политика конфиденциальности
            </Link>
          </div>
        </div>
        <FooterNav isShow={isShow} setIsShow={setIsShow} />
        <Weather prediction={prediction} />
      </div>
    </footer>
  );
};

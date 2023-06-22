import styles from '../Banner/Banner.module.css';
import '../../assets/images/Banner.png';

export const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>ДОСТАВКА ВКУСНЕЙШИХ БЛЮД ЗА СЕКУНДУ</div>
        <span className={styles.subtitle}>ЕЩЕ НЕ ПРОБОВАЛ?</span>
      </div>
    </div>
  );
};

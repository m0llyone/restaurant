import { Link } from 'react-router-dom';
import { Title } from '../../../../common/Title/Title';
import styles from './Trash.module.css';

export const Trash = () => {
  return (
    <div className={styles.container}>
      <Title title="Корзина" />
      <div className={styles.confirmContainer}>
        <Link to="/order" className={styles.confirmButton} state={true}>
          Оформить заказ
        </Link>
      </div>
    </div>
  );
};

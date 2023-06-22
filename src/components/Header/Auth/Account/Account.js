import styles from './Account.module.css';
import { Title } from '../../../../common/Title/Title';
import { Link } from 'react-router-dom';

export const Account = ({}) => {
  return (
    <div className={styles.container}>
      <Title title={'Аккаунт'} />
      <Link classname={styles.button} to="/">
        Выход
      </Link>
    </div>
  );
};

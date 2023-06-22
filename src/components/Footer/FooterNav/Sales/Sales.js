import styles from './Sales.module.css';
import { Title } from '../../../../common/Title/Title';

export const Sales = () => {
  return (
    <div className={styles.container}>
      <Title title={'Акции'} />
    </div>
  );
};

import { Title } from '../../../../common/Title/Title';
import styles from './About.module.css';

export const About = () => {
  return (
    <div className={styles.container}>
      <Title title={'О ресторане'} />
    </div>
  );
};

import styles from './Title.module.css';

export const Title = ({ title }) => {
  return <span className={styles.title}>{title}</span>;
};

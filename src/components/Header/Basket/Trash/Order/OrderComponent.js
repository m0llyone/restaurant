import styles from './Order.module.css';

export const OrderComponent = ({ title, children, addStyles }) => {
  return (
    <div className={`${styles.orderBox} ${addStyles}`}>
      <h4 className={styles.boxTitle}>{title}</h4>
      {children}
    </div>
  );
};

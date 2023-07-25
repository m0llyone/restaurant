import styles from './Button.module.css';

export const Button = ({ title, image, id, handleClick, addStyles }) => {
  return (
    <button
      id={id}
      onClick={handleClick}
      className={`${styles.button} ${addStyles}`}
    >
      <span className={styles.span}>{title}</span>
      {image && <img src={image} alt="picture" />}
    </button>
  );
};

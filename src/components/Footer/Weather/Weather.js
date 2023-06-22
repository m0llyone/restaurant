import styles from './Weather.module.css';

export const Weather = ({ prediction }) => {
  let time = String(prediction.time).match(/\d{2}\:\d{2}/);
  let date = String(prediction.time).match(/\d{4}\-\d{2}\-\d{2}/);
  date = String(date).replace(/\-/g, ' ');
  let weekDay = String(prediction.time).match(/[A-Z]{1}/);
  return (
    <div className={styles.container}>
      <span className={styles.city}>{prediction.city}</span>
      <span className={styles.time}>
        {weekDay} {date} {time}
      </span>
      <div className={styles.tempContainer}>
        <span className={styles.temperature}>{prediction.temperature} </span>
        <span className={styles.degree}>{prediction.degree}</span>
      </div>
    </div>
  );
};

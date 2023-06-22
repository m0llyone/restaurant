import styles from './SearchBar.module.css';
import { Location } from '../../../assets/images/location';
import Search from '../../../assets/images/Search.svg';

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      {/* <img src={Location}></img> */}
      <Location width="21" height="13" fill="black" />
      <input
        type={'text'}
        placeholder={'Введите адрес доставки'}
        className={styles.input}
      ></input>
      <img src={Search}></img>
    </div>
  );
};

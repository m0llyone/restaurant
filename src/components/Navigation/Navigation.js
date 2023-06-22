import styles from './Navigation.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { initialState } from '../../data/initialState';

export const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        {initialState.map((dish) => (
          <NavLink
            className={
              pathname.slice(1) !== dish.link
                ? styles.link
                : [styles.link, styles.link_active].join(' ')
            }
            to={dish.link}
            key={dish.id}
          >
            {dish.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

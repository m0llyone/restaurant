import { useParams } from 'react-router-dom';
import styles from '../course/course.module.css';
import { useReducer } from 'react';
import { initialState } from '../../../data/initialState';
import { Counter } from './Counter/Counter';
import productReducer from '../../../reducer/productreducer';
import { Title } from '../../../common/Title/Title';
import { useDispatch, useSelector } from 'react-redux';

export const Course = () => {
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const { url } = useParams();

  const { title, products, link } = state.find((dish) => {
    if (url === undefined) {
      return dish.link === 'cold-snacks';
    }
    return dish.link === url;
  });

  return (
    <div className={styles.container} key={link}>
      <Title title={title} />
      <div className={styles.productConteiner}>
        {products.map((item) => (
          <div className={styles.product} key={item.id}>
            <img src={item.image.src} alt={item.image.alt}></img>
            <div className={styles.titleContainer}>
              <h3 className={styles.productTitle}>{item.title}</h3>
              <span className={styles.productWeight}>Вес {item.weight}</span>
              <p className={styles.productText}>{item.description}</p>
            </div>
            <div className={styles.counterWrapper}>
              <Counter
                dispatch={dispatch}
                category={link}
                id={item.id}
                price={item.price}
                cartPrice={item.cartPrice}
                cartCount={item.cartCount}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import { Link } from 'react-router-dom';
import { Title } from '../../../../common/Title/Title';
import styles from './Trash.module.css';
import { useEffect, useState } from 'react';
import { Counter } from '../../../Navigation/course/Counter/Counter';
import cross from '../../../../assets/images/cross.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../../common/Button/Button';
import { decrease, remove } from '../../../../reducer/productreducer';

export const Trash = () => {
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const basketState = [];

    state.forEach((elem) => {
      elem.products.forEach((el) => {
        if (el.cartCount > 0) {
          el = { ...el, link: elem.link };
          basketState.push(el);
          console.log(elem.link);
        }
      });
    });
    setBasket(basketState);
    // console.log(basketState);
  }, []);

  const removeProduct = (link, id, cartCount) => {
    const newBasket = basket.filter((el) => el.id !== +id);
    // dispatch(decrease());
    dispatch(remove({ category: link, id: id }));
    setBasket(newBasket);
    console.log(link);
    console.log(id);
  };
  return (
    <div className={styles.container}>
      <Title title="Корзина" />
      <div className={styles.productsContainer}>
        {basket.map((item) => (
          <div className={styles.productContainer} key={item.id}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
              <img
                style={{ maxWidth: '120px' }}
                src={item.image.src}
                alt={item.image.alt}
              />
              <div style={{ maxWidth: '265px' }}>
                <div className={styles.title}>
                  {item.link}
                  {item.title}
                </div>
                <span className={styles.description}>{item.description}</span>
              </div>
            </div>
            <div className={styles.priceContainer}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Counter
                  dispatch={dispatch}
                  category={item.link}
                  product={item.product}
                  cartCount={item.cartCount}
                  addStyles={styles.productContainerButton}
                  // id={item.id}
                />
              </div>
              <div className={styles.price}>{item.cartPrice} ₽ </div>
              <div>
                <Button
                  addStyles={styles.productContainerButton}
                  image={cross}
                  handleClick={() =>
                    removeProduct(item.id, item.cartCount, item.link)
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.confirmContainer}>
        <Link to="/order" className={styles.confirmButton} state={true}>
          Оформить заказ
        </Link>
      </div>
    </div>
  );
};

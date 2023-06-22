import styles from './Counter.module.css';
import cart from '../../../../assets/images/cart.svg';
import Minus from '../../../../assets/images/Minus.svg';
import Plus from '../../../../assets/images/Plus.svg';
import { useState } from 'react';
import { decrease, increase } from '../../../../reducer/productreducer';

export const Counter = ({
  dispatch,
  category,
  id,
  cartCount,
  price,
  cartPrice,
}) => {
  const [isShow, setIsShow] = useState(cartCount > 1);

  const handleAddCount = ({ currentTarget }) => {
    const product = { category: category, id: currentTarget.id };
    dispatch(increase(product));
  };

  const handleSubCount = ({ currentTarget }) => {
    if (cartCount === 1) {
      setIsShow(!isShow);
    } else {
      const product = { category: category, id: currentTarget.id };
      dispatch(decrease(product));
    }
  };

  const handleShowCount = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      {isShow ? (
        <>
          <span className={styles.cartCounter}> {cartCount}</span>
          <div className={styles.container}>
            <button onClick={handleSubCount} id={id} className={styles.button}>
              <img src={Minus} alt={'Minus'} />
            </button>

            <span className={styles.productPrice}>{cartPrice} ₽</span>

            <button onClick={handleAddCount} id={id} className={styles.button}>
              <img src={Plus} alt={'Plus'} />
            </button>
          </div>
        </>
      ) : (
        <div className={styles.container}>
          <span className={styles.productPrice}>{price} ₽</span>
          <button onClick={handleShowCount} className={styles.buttonContainer}>
            <span className={styles.text}>В корзину</span>
            <img src={cart} />
          </button>
        </div>
      )}
    </>
  );
};

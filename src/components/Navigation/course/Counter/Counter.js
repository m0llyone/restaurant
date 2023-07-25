import styles from './Counter.module.css';
import cart from '../../../../assets/images/cart.svg';
import Minus from '../../../../assets/images/Minus.svg';
import bag from '../../../../assets/images/bag.svg';
import Plus from '../../../../assets/images/Plus.svg';
import { useContext, useState } from 'react';
import { decrease, increase } from '../../../../reducer/productreducer';
import { AppContext } from '../../../App/App';
import { Button } from '../../../../common/Button/Button';
import { useLocation, useParams } from 'react-router-dom';
export const Counter = ({
  dispatch,
  category,
  id,
  cartCount,
  price,
  cartPrice,
  addStyles,
}) => {
  const [isShow, setIsShow] = useState(!!cartCount);
  const { counter, setCounter } = useContext(AppContext);
  const { id: urlId } = useParams();
  const { pathname } = useLocation();

  const handleAddCount = ({ currentTarget }) => {
    setCounter(counter + 1);
    const product = { category: category, id: currentTarget.id };
    dispatch(increase(product));
  };

  const handleSubCount = ({ currentTarget }) => {
    if (cartCount === 1) {
      setIsShow(!isShow);
    }
    setCounter(counter - 1);
    const product = { category: category, id: currentTarget.id };
    dispatch(decrease(product));
  };

  const handleShowCount = ({ currentTarget }) => {
    setIsShow(!isShow);
    const product = { category: category, id: currentTarget.id };
    dispatch(increase(product));
    setCounter(counter + 1);
  };

  return (
    <>
      {isShow ? (
        <>
          <span className={styles.cartCounter}>
            {pathname !== '/cart' ? `${cartCount}` : ' '}
          </span>
          <div className={styles.container}>
            <Button
              addStyles={`${styles.button} ${addStyles}`}
              handleClick={handleSubCount}
              id={id}
              image={Minus}
            />
            <span className={styles.productPrice}>
              {pathname === '/cart' ? `${cartCount}` : `${cartPrice} ₽`}
            </span>
            <Button
              addStyles={`${styles.button} ${addStyles}`}
              handleClick={handleAddCount}
              id={id}
              image={Plus}
            />
          </div>
        </>
      ) : (
        <div className={styles.container}>
          <span className={styles.productPrice}>{price} ₽</span>
          <Button
            addStyles={urlId ? styles.buttonProduct : styles.buttonContainer}
            handleClick={handleShowCount}
            id={id}
            image={urlId ? bag : cart}
            title={urlId ? 'Корзина ' : 'В корзину'}
          />
        </div>
      )}
    </>
  );
};

import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './Product.module.css';
import arrow from '../../../assets/images/ArrowLeft.svg';
import { constans } from '../../../common/constans/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { Counter } from '../course/Counter/Counter';

export const Product = () => {
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { url, id } = useParams();
  const navigate = useNavigate();

  const { products, link } = state.find((dish) => dish.link === url);

  const product = products.find((product) => product.id === +id);
  const { title, description, image, cartPrice, cartCount, weight, price } =
    product;
  // console.log(product);

  return (
    <div className={styles.container} key={link}>
      <div style={{ margin: '0 auto' }}>
        <div onClick={() => navigate(-1)} className={styles.backContainer}>
          <div className={styles.imageContainer}>
            <img src={arrow} alt="arrow" />
          </div>
          <span className={styles.arrowText}>Вернуться назад</span>
        </div>

        <div className={styles.productContainer}>
          <div>
            <img className={styles.image} src={image.src} alt={image.src} />
          </div>
          <div
            style={{
              padding: '40px 150px 25px 50px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div className={styles.titleContainer}>
              <div className={styles.title}>{title}</div>
              <div className={styles.description}>{description}</div>
            </div>

            <div>
              <div className={styles.weight}>Вес: {weight} г</div>
              <Counter
                dispatch={dispatch}
                category={link}
                id={id}
                price={price}
                product={product}
                cartPrice={cartPrice}
                cartCount={cartCount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

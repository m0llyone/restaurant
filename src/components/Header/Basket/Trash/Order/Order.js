import { useEffect, useState } from 'react';
import styles from './Order.module.css';
import { OrderComponent } from './OrderComponent';
import { Title } from '../../../../../common/Title/Title';
import arrowLeft from '../../../../../assets/images/ArrowLeft.svg';
import timer from '../../../../../assets/images/Timer.svg';
import { Link } from 'react-router-dom';
import { useValidate } from '../../useValidate/useValidate';
const initialState = {
  name: '',
  phone: '',
  delivery: 'delivery',
  address: {
    street: '',
    house: '',
    flat: '',
    entrance: '',
    floor: '',
    comment: '',
  },
  payment: 'cash',
  time: 'soon',
  persons: 1,
  degree: '',
  agree: false,
};

export const Order = () => {
  const [state, setState] = useState(initialState);
  const [active, setActive] = useState(true);
  const [isPayment, setIsPayment] = useState('cash');
  const [isTime, setIsTime] = useState(true);
  const [count, setCount] = useState(1);
  // const { error, validateState } = useValidate();
  const { error, validate } = useValidate();
  const [isDisabled, setIsDisabled] = useState(false);
  const increment = async (e) => {
    e.preventDefault();
    await setCount(count + 1);
    handleChange(e);
  };

  const decrement = async (e) => {
    if (count > 1) {
      await setCount(count - 1);
    }
    e.preventDefault();
    handleChange(e);
  };

  const handleChange = ({ target }) => {
    const { name, value, type, checked, id } = target;

    const stateValue = type === 'checkbox' ? checked : value;

    validate(name === 'address' ? id : name, value);

    setState({ ...state, [name]: stateValue });

    if (name === 'address') {
      setState({ ...state, [name]: { ...state[name], [id]: stateValue } });
    }
  };

  const handleSubmit = (e) => {
    if (state.agree) {
      console.log(state);
    }
  };

  useEffect(() => {
    const disabled =
      Object.values(error).find((el) => el !== '') ||
      state.name === '' ||
      state.phone === '';

    setIsDisabled(disabled);
  }, [error, state.name]);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.escapeContainer}>
          <img src={arrowLeft} alt="arrowLeft" />
          <Link to="/cart" state={true} style={{ textDecoration: 'none' }}>
            <span className={styles.escapeText}>в корзину</span>
          </Link>
        </div>
        <Title title="Оформление заказа" />
      </div>
      <pre className={styles.json}>{JSON.stringify(state, null, 2)}</pre>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      >
        <OrderComponent title="1. Контактная информация">
          <div className={styles.contactInfo}>
            <div>
              <div className={styles.formGroup}>
                <input
                  className={styles.input}
                  style={{ width: '299px' }}
                  placeholder=" "
                  type="text"
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                  id="name"
                />
                <label htmlFor="name" className={styles.label}>
                  Имя<span className={styles.star}>*</span>
                </label>
              </div>
              <span
                style={{
                  color: '#f6071a',
                  fontFamily: 'Gilroy',
                  fontWeight: '500',
                  fontSize: '16px',
                }}
              >
                {error.name}
              </span>
            </div>
            <div>
              <div className={styles.formGroup}>
                <input
                  className={styles.input}
                  style={{ width: '299px' }}
                  placeholder=" "
                  type="phone"
                  name="phone"
                  value={state.phone}
                  onChange={handleChange}
                  id="phone"
                />
                <label htmlFor="phone" className={styles.label}>
                  Телефон<span className={styles.star}>*</span>
                </label>
              </div>

              <span
                style={{
                  color: '#f6071a',
                  fontFamily: 'Gilroy',
                  fontWeight: '500',
                  fontSize: '16px',
                }}
              >
                {error.phone}
              </span>
            </div>
          </div>
        </OrderComponent>
        <OrderComponent title="2. Доставка">
          <div className={styles.deliveryContainer}>
            <div className={styles.buttonsContainer}>
              <button
                className={
                  active
                    ? [styles.buttonActive, styles.button].join(' ')
                    : styles.button
                }
                name="delivery"
                value="delivery"
                onClick={(e) => {
                  handleChange(e);
                  e.preventDefault();
                  setActive(true);
                  setState({
                    ...state,
                    address: {
                      ...(state.address = {
                        street: '',
                        flat: '',
                        house: '',
                        entrance: '',
                        floor: '',
                        comment: '',
                      }),
                    },
                  });
                }}
              >
                Доставка
              </button>
              <button
                className={
                  active
                    ? styles.button
                    : [styles.buttonActive, styles.button].join(' ')
                }
                name="delivery"
                value="pickUp"
                onClick={(e) => {
                  handleChange(e);
                  e.preventDefault();
                  setActive(false);
                  setState({
                    ...state,
                    address: { ...(state.address = {}) },
                  });
                  setState({
                    ...state,
                    address: {
                      ...(state.address = { streetPickUp: 'not selected' }),
                    },
                  });
                }}
              >
                Самовызов
              </button>
            </div>
            {active && (
              <div className={styles.timeContainer}>
                <img src={timer} alt="clock" />
                <span className={styles.timeText}>
                  Доставим через 1 час 30 минут
                </span>
              </div>
            )}
          </div>
          {active ? (
            <>
              {' '}
              <h5 className={styles.deliveryTitle}>Адрес доставки</h5>
              <div className={styles.addressData}>
                <div>
                  <div className={styles.formGroup}>
                    <input
                      className={styles.input}
                      style={{ width: '351px' }}
                      value={state.address.street}
                      type="text"
                      placeholder=" "
                      name="address"
                      id="street"
                      onChange={handleChange}
                    />
                    <label className={styles.label} htmlFor="street">
                      Укажите улицу<span className={styles.star}>*</span>
                    </label>
                  </div>
                  <span
                    style={{
                      color: '#f6071a',
                      fontFamily: 'Gilroy',
                      fontWeight: '500',
                      fontSize: '14px',
                    }}
                  >
                    {error.street}
                  </span>
                </div>
                <div>
                  <div className={styles.formGroup}>
                    <input
                      className={styles.input}
                      style={{ width: '111px' }}
                      value={state.address.house}
                      placeholder=" "
                      type="text"
                      name="address"
                      id="house"
                      onChange={handleChange}
                    />
                    <label className={styles.label} htmlFor="house">
                      Номер дома<span className={styles.star}>*</span>
                    </label>
                  </div>
                  <span
                    style={{
                      color: '#f6071a',
                      fontFamily: 'Gilroy',
                      fontWeight: '500',
                      fontSize: '14px',
                    }}
                  >
                    {error.house}
                  </span>
                </div>
                <div>
                  <div className={styles.formGroup}>
                    <input
                      className={styles.input}
                      style={{ width: '163px' }}
                      placeholder=" "
                      type="text"
                      value={state.address.flat}
                      id="flat"
                      name="address"
                      onChange={handleChange}
                    />
                    <label className={styles.label} htmlFor="flat">
                      № квартиры/офиса
                    </label>
                  </div>
                  <span
                    style={{
                      color: '#f6071a',
                      fontFamily: 'Gilroy',
                      fontWeight: '500',
                      fontSize: '14px',
                    }}
                  >
                    {error.flat}
                  </span>
                </div>
                <div>
                  <div className={styles.formGroup}>
                    <input
                      className={styles.input}
                      style={{ width: '111px' }}
                      placeholder=" "
                      value={state.address.entrance}
                      id="entrance"
                      type="text"
                      name="address"
                      onChange={handleChange}
                    />
                    <label className={styles.label} htmlFor="entrance">
                      Подъезд
                    </label>
                  </div>
                  <span
                    style={{
                      color: '#f6071a',
                      fontFamily: 'Gilroy',
                      fontWeight: '500',
                      fontSize: '14px',
                    }}
                  >
                    {error.entrance}
                  </span>
                </div>
                <div>
                  <div className={styles.formGroup}>
                    <input
                      className={styles.input}
                      style={{ width: '111px' }}
                      placeholder=" "
                      value={state.address.floor}
                      id="floor"
                      type="text"
                      name="address"
                      onChange={handleChange}
                    />
                    <label className={styles.label} htmlFor="floor">
                      Этаж
                    </label>
                  </div>
                  <span
                    style={{
                      color: '#f6071a',
                      fontFamily: 'Gilroy',
                      fontWeight: '500',
                      fontSize: '14px',
                    }}
                  >
                    {error.floor}
                  </span>
                </div>

                <div className={styles.formGroup}>
                  <input
                    className={styles.input}
                    style={{ width: '539px' }}
                    value={state.address.comment}
                    id="comment"
                    placeholder=" "
                    type="text"
                    name="address"
                    onChange={handleChange}
                  />
                  <label className={styles.label} htmlFor="comment">
                    Комментарий
                  </label>
                </div>
              </div>
            </>
          ) : (
            <div className={styles.select}>
              <h4 className={styles.deliveryTitle}>Выберите ресторан</h4>
              <select
                id="streetPickUp"
                name="address"
                value={state.address.streetPickUp}
                onChange={handleChange}
              >
                <option className={styles.option} value="not indicated">
                  Выберите ресторан
                </option>
                <option className={styles.option} value="Бурдейного">
                  Бурдейного 23
                </option>
                <option className={styles.option} value="Харьковская">
                  Харьковская 7
                </option>
                <option className={styles.option} value="Ландера">
                  Ландера 19
                </option>
              </select>
            </div>
          )}
        </OrderComponent>

        <OrderComponent title="3. Оплатить">
          <div
            style={{ maxWidth: '543px' }}
            className={styles.buttonsContainer}
          >
            <button
              className={
                isPayment == 'online'
                  ? [styles.buttonActive, styles.button].join(' ')
                  : styles.button
              }
              name="payment"
              value="online"
              onClick={(e) => {
                {
                  handleChange(e);
                  e.preventDefault();
                  setIsPayment('online');
                }
              }}
            >
              Оплата онлайн
            </button>
            <button
              className={
                isPayment == 'card'
                  ? [styles.buttonActive, styles.button].join(' ')
                  : styles.button
              }
              name="payment"
              value="card"
              onClick={(e) => {
                {
                  handleChange(e);
                  e.preventDefault();
                  setIsPayment('card');
                }
              }}
            >
              Курьеру картой
            </button>
            <button
              className={
                isPayment == 'cash'
                  ? [styles.buttonActive, styles.button].join(' ')
                  : styles.button
              }
              name="payment"
              value="cash"
              onClick={(e) => {
                {
                  handleChange(e);
                  e.preventDefault();
                  setIsPayment('cash');
                }
              }}
            >
              Наличными
            </button>
          </div>
        </OrderComponent>
        <OrderComponent title="4. Когда доставить">
          <div className={styles.timeClickContainer}>
            <div className={styles.inTimeContainer}>
              <div className={styles.buttonsContainer}>
                <button
                  className={
                    isTime
                      ? [styles.buttonActive, styles.button].join(' ')
                      : styles.button
                  }
                  name="time"
                  value="soon"
                  onClick={(e) => {
                    {
                      handleChange(e);
                      e.preventDefault();
                      setIsTime(true);
                    }
                  }}
                >
                  В ближайшее время
                </button>
                <button
                  className={
                    isTime
                      ? styles.button
                      : [styles.buttonActive, styles.button].join(' ')
                  }
                  name="time"
                  // value="time"
                  onClick={(e) => {
                    {
                      handleChange(e);
                      e.preventDefault();
                      setIsTime(false);
                    }
                  }}
                >
                  Ко времени
                </button>
              </div>

              {!isTime && (
                <div className={styles.formGroup}>
                  <input
                    placeholder=" "
                    className={styles.input}
                    id="time"
                    name="time"
                    value={state.time}
                    onChange={handleChange}
                    style={{ width: '123px' }}
                    type="text"
                  />
                  <label className={styles.label} htmlFor="time">
                    Укажите время
                  </label>
                </div>
              )}
            </div>
            <div>
              <button
                style={{ width: '263px' }}
                className={[styles.buttonPersons, styles.button].join(' ')}
                onClick={(e) => e.preventDefault()}
              >
                <span className={styles.counterText}>Кол-во персон</span>
                <div className={styles.counterContainer}>
                  <button
                    style={{ padding: '0', width: 'auto' }}
                    className={[styles.button, styles.personsText].join(' ')}
                    name="persons"
                    value={count}
                    onClick={decrement}
                  >
                    -
                  </button>

                  <span style={{ fontWeight: '700' }}>{count}</span>
                  <button
                    style={{ padding: '0', width: 'auto' }}
                    className={[styles.button, styles.personsText].join(' ')}
                    name="persons"
                    value={count}
                    onClick={increment}
                  >
                    +
                  </button>
                </div>
              </button>
            </div>
          </div>
          <h5 className={styles.deliveryTitle}>Хотите мы позвоним ?</h5>
          <div className={styles.radioContainer}>
            <div className={styles.radio}>
              <input
                className={styles.radioButton}
                id="noCall"
                type="radio"
                name="degree"
                value="noCall"
                checked={state.degree === 'noCall'}
                onChange={handleChange}
              />
              <span></span>
              <label className={styles.radioText} htmlFor="noCall">
                Не перезванивать
              </label>
            </div>
            <div className={styles.radio}>
              <input
                className={styles.radioButton}
                id="call"
                type="radio"
                name="degree"
                value="call"
                onChange={handleChange}
              />
              <span></span>
              <label className={styles.radioText} htmlFor="call">
                Потребуется звонок оператора
              </label>
            </div>
          </div>
        </OrderComponent>
        <OrderComponent>
          <div className={styles.confirmContainer}>
            <div style={{ display: 'flex' }}>
              <div className={styles.agreeCheckContainer}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  name="agree"
                  checked={state.agree === true}
                  id="agree"
                  onChange={handleChange}
                />
                <label htmlFor="agree" className={styles.confirmText}>
                  Я согласен на обработку моих перс. данных в соответствии с
                </label>
              </div>
              <a className={styles.confirmLink} href="#">
                Условиями
              </a>
            </div>
            <button
              className={styles.mainButton}
              type="submit"
              disabled={isDisabled}
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(e);
                handleChange(e);
              }}
            >
              Оформить заказ
            </button>
          </div>
        </OrderComponent>
      </form>
    </div>
  );
};

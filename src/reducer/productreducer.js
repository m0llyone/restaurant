import { initialState } from '../data/initialState';
import { DECREASE_PRICE, INCREASE_PRICE, REMOVE_ITEM } from './types';

export const increase = (payload) => ({ type: INCREASE_PRICE, payload });
export const decrease = (payload) => ({ type: DECREASE_PRICE, payload });
export const remove = (payload) => ({ type: REMOVE_ITEM, payload });

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_PRICE: {
      const { id, category } = action.payload;
      const newState = state.map((elem) => {
        if (elem.link === category) {
          const products = elem.products.map((el) => {
            if (el.id === +id) {
              return {
                ...el,
                cartPrice: el.cartPrice + el.price,
                cartCount: el.cartCount + 1,
              };
            }
            return el;
          });
          return { ...elem, products: products };
        }
        return elem;
      });
      return newState;
    }

    case DECREASE_PRICE: {
      const { id, category } = action.payload;
      const newState = state.map((elem) => {
        if (elem.link === category) {
          const products = elem.products.map((el) => {
            if (el.id === +id) {
              return {
                ...el,
                cartPrice: el.cartPrice - el.price,
                cartCount: el.cartCount - 1,
              };
            }
            return el;
          });
          return { ...elem, products: products };
        }
        return elem;
      });
      return newState;
    }

    case REMOVE_ITEM: {
      const { id, category } = action.payload;
      const newState = state.map((elem) => {
        if (elem.link === category) {
          const products = elem.products.map((el) => {
            if (el.id === +id) {
              return {
                ...el,
                cartPrice: 0,
                cartCount: 0,
              };
            }
            return el;
          });
          return { ...elem, products: products };
        }
        return elem;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default productReducer;

// import { DECREASE_PRICE, INCREASE_PRICE } from './types';
// import { initialState } from '../data/initialState';

// export const increase = () => ({ type: INCREASE_PRICE });
// export const decrease = () => ({ type: DECREASE_PRICE });

// const stateInit = {
//   count: initialState,
// };

// const counterReducer = (state = stateInit, action) => {
//   switch (action.type) {
//     case INCREASE_PRICE: {
//       // return {
//       //   ...state,
//       //   count: state.count + 1,
//       // };
//       const { id, category } = action;

//       const newState = state.map((elem) => {
//         if (elem.link === category) {
//           const products = elem.products.map((el) => {
//             if (el.id === +id) {
//               return {
//                 ...el,
//                 cartPrice: el.cartPrice + el.price,
//                 cartCount: el.cartCount + 1,
//               };
//             }
//             return el;
//           });

//           return { ...elem, products: products };
//         }

//         return elem;
//       });
//       return newState;
//     }

//     case DECREASE_PRICE: {
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export default counterReducer;

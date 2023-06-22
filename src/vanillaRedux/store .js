import { combineReducers, createStore } from 'redux';
import productReducer from '../reducer/productreducer';

const rootReducer = combineReducers({
  product: productReducer,
});

export const store = createStore(rootReducer);

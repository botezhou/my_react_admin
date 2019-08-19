import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import themesReducer from './themes-reducer';

const allReducers = {
  products: productsReducer,
  themes: themesReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;
import { PRODUCTS } from '../../constants/data/index';
import { productsTypes } from '../types';

const { SELECT_PRODUCT } = productsTypes;

const initialState = {
  products: FLIGHTS,
  filteredProducts: [],
  selected: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT: {
      return {
        ...state,
        selected: state.products.find((product) => product.id === action.productId),
      };
    }
    
    default:
      return state;
  }
};

export default productReducer;
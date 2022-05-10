import { ProductsConstants } from "../constants";

const initState = {
  other: [],
  new: [],
  current: {},
  more: false,
  page: 0,
};

export const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case ProductsConstants.GET_ALL:
      console.log(action);
      return {
        ...state,
        other: state.other.concat(action.products.other),
        new: action.products.new,
        more: action.products.more,
      };
    case ProductsConstants.GET:
      console.log(action);
      return {
        ...state,
        current: action.product,
      };

      case ProductsConstants.CLEAR_PRODUCTS:
      console.log(action);
      return {
        ...state,
        other: [],
      };
    
      case ProductsConstants.CHANGE_PAGE:
        console.log(action);
        return {
          ...state,
          page: action.page,
        };

    default:
      return state;
  }
};

export default ProductsReducer;

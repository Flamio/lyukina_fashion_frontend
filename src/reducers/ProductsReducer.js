import {ProductsConstants} from "../constants";

export const ProductsReducer = (state = {other: [], new: []}, action) => {
  switch (action.type) {
    case ProductsConstants.GET_ALL:
      console.log(action)
      return {
        ...state,
        other: action.products.other,
        new: action.products.new
      }

    default:
      return state
  }
}

export default ProductsReducer
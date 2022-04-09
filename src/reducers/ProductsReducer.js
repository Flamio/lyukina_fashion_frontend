import {ProductsConstants} from "../constants";

export const ProductsReducer = (state = {other: [], new: []}, action) => {
  switch (action.type) {
    case ProductsConstants.GET_ALL:
      console.log(action)
      return {
        ...state,
        other: action.products.other,
        new: action.products.new,
        more: action.products.more
      }
    case ProductsConstants.GET_MORE:
      console.log(state)
      return {
        ...state,
        other: state.other.concat(action.products.products),
        more: action.products.more
      }

    default:
      return state
  }
}

export default ProductsReducer
import {ProductsConstants} from "../constants";

const initState =  {
  other: [],
  new: [],
  current: {},
  more: false
}

export const ProductsReducer = (state = initState, action) => {
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
      case ProductsConstants.GET:
        console.log(action)
        return {
          ...state,
          current: action.product
        }  

    default:
      return state
  }
}

export default ProductsReducer
import { CartConstants } from "../constants"

export const CartReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case CartConstants.PUT_PRODUCT:
          return {
              ...state,
              products: state.products.concat(action.id)
          }
    
        default:
          return state
      }
    
}
import { CartConstants } from "../constants"

export const CartReducer = (state = {products: []}, action) => {

  const mergeProductByQuantuty = (product, index, productExistIndex) => {
    if (index === productExistIndex) {
      product.quantity = product.quantity + action.product.quantity
    }
    return product;
  }

    switch (action.type) {
        case CartConstants.PUT_PRODUCT:
          const productExistIndex = state.products.findIndex(p => p.id === action.product.id && p.size === action.product.size)            
          console.log(productExistIndex)
          return {
              ...state,
              products: productExistIndex !== -1 ? 
                state.products.map((p, index) => mergeProductByQuantuty(p, index, productExistIndex)) : state.products.concat(action.product)
          }
    
        default:
          return state
      }
    
}
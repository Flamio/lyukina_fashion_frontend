import { CartConstants } from "../constants";
import { ModalWindowActions } from "./ModalWindowActions";

export const CartActions = {
  putProduct,
  removeProduct,
  changeQuantity
};

function putProduct(product) {

    const returnState = () => {
        return { type: CartConstants.PUT_PRODUCT, product }
    }

    return dispatch => {
        dispatch(returnState())
        dispatch(ModalWindowActions.addToCart(true))        
    }
  
}

function removeProduct(id, sizeId) {
    return {type: CartConstants.REMOVE_PRODUCT, id, sizeId}
}

function changeQuantity(id, sizeId, newQuantity) {    
    return {type: CartConstants.CHANGE_QUANITITY, id, sizeId, newQuantity}
}

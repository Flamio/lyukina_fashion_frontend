import { CartConstants } from "../constants";
import { ModalWindowActions } from "./ModalWindowActions";

export const CartActions = {
  putProduct,
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

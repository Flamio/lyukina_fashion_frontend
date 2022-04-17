import { CartConstants } from "../constants";
import { ModalWindowActions } from "./ModalWindowActions";

export const CartActions = {
  putProduct,
};

function putProduct(id) {

    const returnState = () => {
        return { type: CartConstants.PUT_PRODUCT, id }
    }

    return dispatch => {
        dispatch(returnState())
        dispatch(ModalWindowActions.addToCart(true))        
    }
  
}

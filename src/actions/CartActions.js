import { CartConstants } from "../constants";

export const CartActions = {
  putProduct,
};

function putProduct(id) {
  return { type: CartConstants.PUT_PRODUCT, id };
}

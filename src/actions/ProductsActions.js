import { ProductsConstants } from "../constants";
import { ProductService } from "../services/ProductService";
import { ModalWindowActions } from "./ModalWindowActions";

export const ProductsActions = {
  get,
};

function get(id) {
  const success = (product) => {
    return {
      type: ProductsConstants.GET,
      product,
    };
  };

  return (dispatch) => {
    ProductService.get(id).then((product) => {
      dispatch(ModalWindowActions.loading(false));
      dispatch(success(product));
    });
  };
}

import { ProductsConstants } from "../constants";
import { ProductService } from "../services/ProductService";
import { ModalWindowActions } from "./ModalWindowActions";

export const ProductsActions = {
  getByPageName,
};

function getByPageName(pageName) {
  const success = (product) => {
    return {
      type: ProductsConstants.GET,
      product,
    };
  };

  return (dispatch) => {
    ProductService.getByPageName(pageName).then((product) => {
      dispatch(ModalWindowActions.loading(false));
      dispatch(success(product));
    });
  };
}

import { ProductsConstants } from "../constants";
import { ProductService } from "../services/ProductService";
import { ModalWindowActions } from "./ModalWindowActions";

export const ProductsActions = {
  getByPageName,
  changeProductPage,
  clearProducts
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

function changeProductPage(page) {
  return {
    type: ProductsConstants.CHANGE_PAGE,
    page
  }
}

function clearProducts() {
  return {
    type: ProductsConstants.CLEAR_PRODUCTS,
  }
}

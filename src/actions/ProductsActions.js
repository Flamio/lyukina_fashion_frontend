import {ProductsConstants} from "../constants";
import {ProductsService} from "../services";
import {ModalWindowActions} from "./ModalWindowActions";

export const ProductsActions = {
  getAll,
  getProductsMore
}

function getAll() {

  const success = (products) => {

    return {
      type: ProductsConstants.GET_ALL,
      products
    }
  }

  return dispatch => {
    ProductsService.getAll().then(products => {
      dispatch(ModalWindowActions.loading(false));
      return dispatch(success(products))
    })
  }
}

function getProductsMore() {

  const success = (products) => {
    return {
      type: ProductsConstants.GET_MORE,
      products
    }
  }

  return dispatch => {
    ProductsService.getMore().then(products => {
          dispatch(ModalWindowActions.loading(false));
          dispatch(success(products))
        }
    );
  }
}
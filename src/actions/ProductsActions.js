import {ProductsConstants} from "../constants";
import {ProductsService} from "../services";

export const ProductsActions =  {
  getAll
}

function getAll() {

  const success = (products) => {
    return {
      type: ProductsConstants.GET_ALL,
      products
    }
  }

  return dispatch => {
    ProductsService.getAll().then(products => dispatch(success(products)));
  }


}
import {ProductsConstants, CategoriesConstants} from "../constants";
import {MainPageService} from "../services";
import {ModalWindowActions} from "./ModalWindowActions";
import { ProductsActions } from "./ProductsActions";

export const MainPageActions = {
  getAll
}

function getAll(page, category) {

  const productsSuccess = (mainPageDto) => {

    return {
      type: ProductsConstants.GET_ALL,
      products: {
        new: mainPageDto.new,
        other: mainPageDto.other,
        more: mainPageDto.more
      }
    }
  }

  const categoriesSuccess = (mainPageDto) => {
    return {
      type: CategoriesConstants.GET_ALL,
      categories: mainPageDto.categories
    }
  }

  return dispatch => {
    console.log(category)
    MainPageService.getAll(page, category).then(mainPageDto => {
      dispatch(ModalWindowActions.loading(false));
      dispatch(categoriesSuccess(mainPageDto))
      dispatch(ProductsActions.changeProductPage(page))
      return dispatch(productsSuccess(mainPageDto))
    })
  }
}
import {ProductsConstants, CategoriesConstants} from "../constants";
import {MainPageService} from "../services";
import {ModalWindowActions} from "./ModalWindowActions";

export const MainPageActions = {
  getAll
}

function getAll(page) {

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
    MainPageService.getAll(page).then(mainPageDto => {
      dispatch(ModalWindowActions.loading(false));
      dispatch(categoriesSuccess(mainPageDto))
      return dispatch(productsSuccess(mainPageDto))
    })
  }
}
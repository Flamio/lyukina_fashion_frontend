import {combineReducers} from "redux";
import {ModalWindowReducer} from "./ModalWindowReducer";
import ProductsReducer from "./ProductsReducer";
import CategoriesReducer from "./CategoriesReducer"

export const rootReducer = combineReducers({
  modalWindow: ModalWindowReducer,
  products: ProductsReducer,
  categories: CategoriesReducer
});
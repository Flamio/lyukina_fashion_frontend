import {combineReducers} from "redux";
import {ModalWindowReducer} from "./ModalWindowReducer";
import ProductsReducer from "./ProductsReducer";
import CategoriesReducer from "./CategoriesReducer"
import { CartReducer } from "./CartReducer";

export const rootReducer = combineReducers({
  modalWindow: ModalWindowReducer,
  products: ProductsReducer,
  categories: CategoriesReducer,
  cart: CartReducer
});
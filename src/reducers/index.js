import {combineReducers} from "redux";
import {ModalWindowReducer} from "./ModalWindowReducer";
import ProductsReducer from "./ProductsReducer";

export const rootReducer = combineReducers({
  modalWindow: ModalWindowReducer,
  products: ProductsReducer
});
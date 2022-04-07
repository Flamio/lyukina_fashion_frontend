import {combineReducers} from "redux";
import {ModalWindowReducer} from "./ModalWindowReducer";

export const rootReducer = combineReducers({
  modalWindow: ModalWindowReducer
});
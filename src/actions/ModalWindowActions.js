import {ModalWindowConstants} from "../constants/ModalWindowConstants";

export const ModalWindowActions = {
  contacts,
  loading,
  addToCart,
  productSettings
}

function contacts(state) {
  return {type: ModalWindowConstants.CONTACTS, state}
}

function loading(state) {
  return {type: ModalWindowConstants.LOADING, state}
}

function addToCart(state) {
  return {type: ModalWindowConstants.ADD_TO_CART, state}
}

function productSettings(state, id) {
  return {type: ModalWindowConstants.PRODUCT_SETTINGS, state, id}
}


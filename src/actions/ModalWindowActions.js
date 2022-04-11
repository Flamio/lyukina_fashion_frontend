import {ModalWindowConstants} from "../constants/ModalWindowConstants";

export const ModalWindowActions = {
  contacts,
  loading,
}

function contacts(state) {
  return {type: ModalWindowConstants.CONTACTS, state}
}

function loading(state) {
  return {type: ModalWindowConstants.LOADING, state}
}


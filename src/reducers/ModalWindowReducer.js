import {ModalWindowConstants} from "../constants/ModalWindowConstants";

export function ModalWindowReducer(state={contacts: false, loader: true}, action) {
  switch (action.type) {
    case ModalWindowConstants.SHOW_CONTACTS:
      return {
        ...state,
        contacts: true
      };

    case ModalWindowConstants.HIDE_CONTACTS:
      return {
        ...state,
        contacts: false
      };

    default:
      return state
  }
}
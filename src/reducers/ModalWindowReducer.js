import {ModalWindowConstants} from "../constants/ModalWindowConstants";

export function ModalWindowReducer(state={contacts: false, loading: true}, action) {
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

    case ModalWindowConstants.LOADING:
      return {
        ...state,
        loading: action.state
      };

    default:
      return state
  }
}
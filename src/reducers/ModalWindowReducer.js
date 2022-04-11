import {ModalWindowConstants} from "../constants/ModalWindowConstants";

export function ModalWindowReducer(state={contacts: false, loading: true}, action) {
  switch (action.type) {
    case ModalWindowConstants.CONTACTS:
      return {
        ...state,
        contacts: action.state
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
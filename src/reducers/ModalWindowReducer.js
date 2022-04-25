import { ModalWindowConstants } from "../constants/ModalWindowConstants";

export function ModalWindowReducer(
  state = {
    contacts: false,
    loading: true,
    addToCart: false,
    productSettings: false,
  },
  action
) {
  switch (action.type) {
    case ModalWindowConstants.CONTACTS:
      return {
        ...state,
        contacts: action.state,
      };

    case ModalWindowConstants.LOADING:
      return {
        ...state,
        loading: action.state,
      };

    case ModalWindowConstants.ADD_TO_CART:
      return {
        ...state,
        addToCart: action.state,
      };

    case ModalWindowConstants.PRODUCT_SETTINGS:
      return {
        ...state,
        productSettings: { show: action.state, id: action.id }
      };

    default:
      return state;
  }
}

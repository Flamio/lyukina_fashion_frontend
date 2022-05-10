import { CategoriesConstants } from "../constants";

const CategoriesReducer = (state = { data: [], current: null }, action) => {
  switch (action.type) {
    case CategoriesConstants.GET_ALL:
      return {
        ...state,
        data: action.categories,
      };

    case CategoriesConstants.CHANGE_CURRENT:
      return {
        ...state,
        current: action.category,
      };

    default:
      return state;
  }
};

export default CategoriesReducer;

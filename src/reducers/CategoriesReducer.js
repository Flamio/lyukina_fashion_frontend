import { CategoriesConstants } from "../constants";

const CategoriesReducer = (state=[], action) => {
    switch (action.type) {
        case CategoriesConstants.GET_ALL:
          return action.categories;
    
        default:
          return state
      }
}

export default CategoriesReducer
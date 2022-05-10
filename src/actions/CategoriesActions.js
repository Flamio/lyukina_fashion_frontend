import { CategoriesConstants } from "../constants"

export const CategoriesActions = {
    changeCategory
}

function changeCategory(categoryId) {
    return {
        type: CategoriesConstants.CHANGE_CURRENT,
        category: categoryId
    }
}
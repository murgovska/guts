import { categoryConstants } from '../constants';

export function categories(state = {}, action) {
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
    return {
        loading: true
      };
    case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
      return {
        items: action.categories,
        selectedCategory: 'allCategories'
      };
    case categoryConstants.GET_ALL_CATEGORIES_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
import { categoryConstants } from '../constants';

let selectedCategory = localStorage.getItem('selectedCategory');
const initialState = selectedCategory ? selectedCategory : '1';

export function categories(state = initialState, action) {
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
    return {
        loading: true
      };
    case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
      return {
        items: action.categories,
        selectedCategory: selectedCategory
      };
    case categoryConstants.GET_ALL_CATEGORIES_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
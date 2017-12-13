import { categoryConstants } from '../constants';
import { categoryService } from '../services';
import { alertActions } from './';
import { error } from 'util';
import { categories } from '../reducers/categories.reducer';

export const categoryActions = {
    getCategories
};

function getCategories() {
    return dispatch => {
        dispatch(request());

        categoryService.getCategories()
            .then(
                categories => dispatch(success(categories)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: categoryConstants.GET_ALL_CATEGORIES_REQUEST } }
    function success(categories) { return { type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS, categories } }
    function failure(error) { return { type: categoryConstants.GET_ALL_CATEGORIES_FAILURE, error } }
}
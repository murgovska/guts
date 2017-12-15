import { categoryConstants } from '../constants';
import { categoryService } from '../services';
import { alertActions } from './';
import { error } from 'util';
import { gameActions } from '../actions'

export const categoryActions = {
    getCategories
};

function getCategories() {

    let selectedCategory = localStorage.getItem('selectedCategory');
    return dispatch => {
        dispatch(request());

        categoryService.getCategories()
            .then(categories => dispatch(success(categories)))
            .then(dispatch(gameActions.getGames(selectedCategory)))
            .catch(error => dispatch(failure(error)));
          
    };

    function request() { return { type: categoryConstants.GET_ALL_CATEGORIES_REQUEST } }
    function success(categories) { return { type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS, categories } }
    function failure(error) { return { type: categoryConstants.GET_ALL_CATEGORIES_FAILURE, error } }
}
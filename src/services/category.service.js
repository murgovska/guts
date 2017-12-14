import * as api from '../api.ts';

export const categoryService = {
    getCategories
};

function getCategories() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(api.categories, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }

    return response.json();
}
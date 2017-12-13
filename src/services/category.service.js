export const categoryService = {
    getCategories
};

function getCategories() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch('http://demo8841360.mockable.io/categories', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }

    return response.json();
}
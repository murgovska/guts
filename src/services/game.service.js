export const gameService = {
    getAllGames
};

function getAllGames() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch('http://demo8841360.mockable.io/allGames', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }

    return response.json();
}
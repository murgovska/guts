import * as api from '../api.ts';

export const gameService = {
    getGames
};

function getGames(gamesAPI) {
    gamesAPI = checkGamesApi(gamesAPI);
    const requestOptions = {
        method: 'GET'
    };

    return fetch(gamesAPI, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }
    
    return response.json();
}

function checkGamesApi (gamesAPI) {
    switch (gamesAPI) {
        case 'allGames':
            return api.allGames;

        case 'mostPopular':
            return api.mostPopular;

        case 'tableGames':
            return api.tableGames;

        case 'slotMachines':
            return api.slotMachines;

        default: 
            return api.allGames;
    }
}
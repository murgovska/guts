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

function checkGamesApi (gameId) {
    switch (gameId) {
        case '1':
            return api.allGames;

        case '2':
            return api.mostPopular;

        case '3':
            return api.tableGames;

        case '4':
            return api.slotMachines;

        default: 
            return api.allGames;
    }
}
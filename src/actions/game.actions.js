import { gameConstants } from '../constants';
import { gameService } from '../services';
import { alertActions } from './';
import { error } from 'util';

export const gameActions = {
    getGames,
    setCurrentGame
};

function getGames(selectedCategory) {
    return dispatch => {
        dispatch(request());

        gameService.getGames(selectedCategory)
            .then(
            games => dispatch(success(games, selectedCategory)),
            error => dispatch(failure(error))
            );
    };

    function request() { return { type: gameConstants.GET_ALL_GAMES_REQUEST } }
    function success(games, selectedCategory) { 
        localStorage.setItem('selectedCategory', selectedCategory);
        return { type: gameConstants.GET_ALL_GAMES_SUCCESS, games, selectedCategory }
    }
    function failure(error) { return { type: gameConstants.GET_ALL_GAMES_FAILURE, error } }
}

function setCurrentGame(game) {
    return dispatch => {
        dispatch(request(game));
    }

    function request(game) {
        localStorage.setItem('currentGame', JSON.stringify(game));
        return { 
            type: gameConstants.SET_CURRENT_GAME, game
         }
    }
}
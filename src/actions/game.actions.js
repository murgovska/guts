import { gameConstants } from '../constants';
import { gameService } from '../services';
import { alertActions } from './';
import { error } from 'util';

export const gameActions = {
    getGames
};

function getGames(gamesCategory) {
    return dispatch => {
        dispatch(request());

        gameService.getGames(gamesCategory)
            .then(
                games => dispatch(success(games)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: gameConstants.GET_ALL_GAMES_REQUEST } }
    function success(games) { return { type: gameConstants.GET_ALL_GAMES_SUCCESS, games } }
    function failure(error) { return { type: gameConstants.GET_ALL_GAMES_FAILURE, error } }
}
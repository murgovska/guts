import { gameConstants } from '../constants';
import { gameService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';
import { error } from 'util';

export const gameActions = {
    getAllGames
};

function getAllGames() {
    return dispatch => {
        dispatch(request());

        gameService.getAllGames()
            .then(
                games => dispatch(success(games)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: gameConstants.GET_ALL_GAMES_REQUEST } }
    function success(games) {console.log(games, 'Games in actions file'); return { type: gameConstants.GET_ALL_GAMES_SUCCESS, games } }
    function failure(error) { return { type: gameConstants.GET_ALL_GAMES_FAILURE, error } }
}
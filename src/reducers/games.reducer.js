import { gameConstants } from '../constants';

export function games(state = {}, action) {
  switch (action.type) {
    case gameConstants.GET_ALL_GAMES_REQUEST:
    return {
        loading: true
      };
    case gameConstants.GET_ALL_GAMES_SUCCESS:
      return {
        items: action.games
      };
    case gameConstants.SET_CURRENT_GAME:
      return {
        currentGame: action.game
      };
    case gameConstants.GET_ALL_GAMES_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
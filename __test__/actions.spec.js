import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from '../src/actions';
import * as constants from '../src/constants';
import { throws } from 'assert';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {

    it('should create an action to send success alert', () => {
        const message = 'Success message';
        let type = 'ALERT_SUCCESS';

        const expectedAction = {
            type,
            message
        }

        expect(actions.alertActions.success(message)).toEqual(expectedAction);
    });
});

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('should get all games', () => {
        const store = mockStore([]);
        const items = [
            { gameName: "Orient Express", gameId: 1 },
            { gameName: "Starburst", gameId: 2 },
            { gameName: "Dragon Wins", gameId: 3 },
            { gameName: "Dream Catcher", gameId: 4 },
            { gameName: "7 Sins", gameId: 5 },
            { gameName: "A While on the Nile", gameId: 6 },
            { gameName: "Acorn Pixie", gameId: 7 },
            { gameName: "African Simba", gameId: 8 },
            { gameName: "Alchymedes", gameId: 9 },
            { gameName: "Alice & The Mad Tea Party", gameId: 10 },
            { gameName: "Amazon Queen", gameId: 11 },
            { gameName: "Beach", gameId: 12 }
        ];

        fetchMock
            .getOnce('/allGames', { body: items, headers: { 'content-type': 'application/json' } })
      

        const expectedAction = [
            { loading: true },
            { items }
        ];

        return store.dispatch(actions.gameActions.getGames(1)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        }).catch(err => { throw (err) });
    });
});
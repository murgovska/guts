import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import { shallow, configure } from 'enzyme';
import { HeaderComponent } from '../src/components/Header';
import Adapter from 'enzyme-adapter-react-16';
import { games, initialState } from '../src/reducers/games.reducer';

configure({ adapter: new Adapter() });

describe('components', () => {
    describe('Header', () => {
        it('should render header class wrapper', () => {
            const wrapper = shallow(<HeaderComponent />);
            expect(wrapper.find('div.header').length).toEqual(1);
        })
    })
})

describe('Reducer', () => {
    it('Should return the initial state when no action passed', () => {
        expect(games(undefined, {})).toEqual(initialState);
    });

    it('Should return the initial state when no action passed', () => {
        const action = {
            type: 'SET_CURRENT_GAME', 
            game: {
                gameName: "Orient Express", gameId: 1
            }
        };
        const expected = { currentGame: { gameName: "Orient Express", gameId: 1 } };
        expect(games(undefined, action)).toEqual(expected);
    });
});
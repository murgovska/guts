import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import { Header } from '../src/components/Header';

describe('HeaderComponent', () => {
    it('works', ()=>{
        let header = TestUtils.renderIntoDocument(<Header/>);
        expect(header).toExist();
    });
});
import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';
import { gameActions } from '../../actions';
import { alertActions } from '../../actions';
import { history } from '../../helpers';
import { Game } from '../Games';

class HomeContent extends React.Component {

    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <div>Welcome Offer</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state
    };
}

const homeContent = connect(mapStateToProps)(HomeContent);
export { homeContent as HomeContent };
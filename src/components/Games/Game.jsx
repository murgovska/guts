import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../helpers';
var FontAwesome = require('react-fontawesome');

class Game extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        return (
            <div className="col-md-3">
            <div className="game text-center">
              <p className="gameName">{this.props.item.gameName}</p>
              <div><FontAwesome name='play-circle'/></div>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state
    };
}

const game = connect(mapStateToProps)(Game);
export { game as Game };
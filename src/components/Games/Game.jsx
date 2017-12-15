import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../helpers';
import { gameActions } from '../../actions/game.actions';

var FontAwesome = require('react-fontawesome');

class Game extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        this.selectCurrentGame = this.selectCurrentGame.bind(this);
    }

    selectCurrentGame() {
        const { dispatch } = this.props;
        dispatch(gameActions.setCurrentGame(this.props.item));
    }

    render() {
        const { loggedIn } = this.props.state.authentication;

        return (
            <div className="col-md-3">
            <div className="game text-center">
                <div className="gameName">{this.props.item.gameName}</div>
                <Link to="/play" onClick={this.selectCurrentGame}><div><FontAwesome name='play-circle'/></div></Link>
                {loggedIn && <div className="playText">Play for real</div>}
                {!loggedIn && <div className="playText">Play for fun</div>}
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
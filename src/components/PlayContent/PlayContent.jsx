import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { alertActions } from '../../actions';
var FontAwesome = require('react-fontawesome');

class PlayContent extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
    }

    render() {
        const { loggedIn } = this.props.state.authentication;
        const { currentGame } = this.props.state.games;
        if (currentGame) {
            return (
                <div className="col-md-6 col-md-offset-3">
                    <div className="playGame text-center">
                        <div className="gameName">{currentGame.gameName}</div>
                        <div><FontAwesome name='play-circle' /></div>
                        {loggedIn && <div className="playText">Play for real</div>}
                        {!loggedIn && <div className="playText">Play for fun</div>}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="col-md-6 col-md-offset-3">
                    <div className="text-center">
                        <Link to="/">Back to browser games</Link>
                    </div>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        state
    };
}

const playContent = connect(mapStateToProps)(PlayContent);
export { playContent as PlayContent };
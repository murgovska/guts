import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { gameActions } from '../../actions';
import { alertActions } from '../../actions';
import { Game } from '../Games';


class CasinoContent extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        dispatch(gameActions.getAllGames());
    }

    render() {
        if (this.props.state['games'].items !== undefined) {
            var games = this.props.state['games'].items.map(function(item) {
                return (
                  <Game key={item.gameId} item={item}/>
                );
              });
              return (
                <div className="col-md-12 games">
                    {games}
                </div>
              );
        }
        else {
            return (
                null
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        state
    };
}

const casinoContent = connect(mapStateToProps)(CasinoContent);
export { casinoContent as CasinoContent };
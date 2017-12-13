import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { gameActions } from '../../actions';
import { alertActions } from '../../actions';
import { Game } from '../Games';
import { Categories } from '../Categories';


class CasinoContent extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        // dispatch(gameActions.getGames());
    }

    render() {

        if (this.props.state['games'].items !== undefined) {
            var games = this.props.state['games'].items.map(function(item) {
                return (
                  <Game key={item.gameId} item={item}/>
                );
              });
              return (
                <div>
                    <Categories />
                    <div className="col-md-12 games">
                        { games }
                    </div>
                </div>
              );
        }
        else {
            return (
                <div>
                    <Categories />
                </div>
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
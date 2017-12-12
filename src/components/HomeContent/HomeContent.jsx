import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';
import { alertActions } from '../../actions';
import { history } from '../../helpers';


class HomeContent extends React.Component {
    constructor(props) {
        super(props);
        console.log ('Props - ', props);
    }

    render() {
        return (
            <div className="container">
                User not logged in default content
            </div>
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
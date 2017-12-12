import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../helpers';
import { alertActions } from '../../actions';
import { Header } from '../../components/Header';
import { PrivateRoute } from '../../components/PrivateRoute';
import { HomeContent } from '../../components/HomeContent';
import { CasinoContent } from '../../components/CasinoContent';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="container-fluid">
            <Header />
            <Router history={history}>
            <div className="row">
                <PrivateRoute exact path="/casino" component={ CasinoContent } />
                <Route exact path="/" component={ HomeContent } />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
            </div>
            </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
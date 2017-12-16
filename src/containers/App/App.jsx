import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../helpers';
import { alertActions } from '../../actions';
import { Header } from '../../components/Header';
import { PrivateRoute } from '../../components/PrivateRoute';
import { CasinoContent } from '../../components/CasinoContent';
import { PlayContent } from '../../components/PlayContent';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { SettingsPage } from '../SettingsPage';

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
            <div>
                <Header /> 
                <Router history={history}>
                    <div className="content">
                        <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        </div>
                        <Route exact path="/play" component={PlayContent} />
                        <Route exact path="/" component={CasinoContent} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/settings" component={SettingsPage} />
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
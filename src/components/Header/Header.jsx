import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';
import { alertActions } from '../../actions';
import { history } from '../../helpers';

class Header extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });

        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.dispatch(userActions.logout());
    }

    render() {
        const { user, loggedIn } = this.props;
        return (
            <div className="header">
                <div className="row">
                    <Router history={history}>
                        <div className="col-md-6 col-sm-4 col-xs-12">
                            <label className="guts"><Link to="/">GUTS</Link></label>
                        </div>
                    </Router>
                    <Router history={history}>
                        <div className="col-md-6 text-right col-sm-8 col-xs-12">
                            {user && user.username && <span className="username">Welcome,  {user.username}!</span>}
                            <Link to="/casino"><input type="button" className="btn btnGameBrowser" value="Game browser" /></Link>
                            {!loggedIn && <Link to="/login"> <input type="button" className="btn btnLogin" value="Log in" /></Link>}
                            {!loggedIn && <Link to="/register"><input type="button" className="btn btnRegister" value="Register" /></Link>}
                            {loggedIn && <Link to="/settings"> <input type="button" className="btn btnRegister" value="Settings" /></Link>}
                            {loggedIn && <Link to="/"><input type="button" className="btn btnLogout" value="Logout" onClick={this.logout} /></Link>}
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { login } = { 'buttonValue': 'Log In' };
    const { register } = { 'buttonValue': 'Register' };
    const { user, loggedIn } = state.authentication;
    return {
        login,
        register,
        user,
        loggedIn
    };
}


const header = connect(mapStateToProps)(Header);
export { header as Header };
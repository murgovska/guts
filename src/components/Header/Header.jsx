import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';
import { alertActions } from '../../actions';
import { history } from '../../helpers';
// import classes from '../../styles/components/button.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
       // console.log ('classes', classes);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        console.log(this.props);
        const { user, loggedIn } = this.props;
        return (
            <div className="header">
                <div className="row">
                    <div className="col-md-6">
                        <label className="guts">GUTS</label>
                    </div>
                    <Router history={history}>

                        <div className="col-md-6 text-right">
                            {loggedIn && <Link to="/login"><input type="button" className="btn btnSubmit" value="Logout" /></Link>}
                            {user && user.username && <span>Hello {user.username}</span>}
                            <Link to="/casino"><input type="button" className="btn btnSubmit" value="Game browser" /></Link>
                            {!loggedIn && <Link to="/login"> <input type="button" className="btn btnLogin" value="Log in" /></Link>}
                            {!loggedIn && <Link to="/register"><input type="button" className="btn btnRegister" value="Register" /></Link>}
                            {loggedIn && <Link to="/settings"> <input type="button" className="btn btnRegister" value="Settings" /></Link>}
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
import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';
import { alertActions } from '../../actions';
import { history } from '../../helpers';
import { Button } from './Button';

class Header extends React.Component {
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
            <div className="header">
                <div className="col-md-12">
                    <div className="col-md-6">
                        GUTS
                    </div>
                    <Router history={history}>
                    <div className="col-md-6 text-right">
                        <Link to="/login" className="btn btn-link"> <input type="button" className="btn" value="Log in"/></Link>
                        <Link to="/register" className="btn btn-link"><input type="button" className="btn" value="Register"/></Link>  
                    </div>
                    </Router>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { login } = {'buttonValue': 'Log In'};
    const { register } = {'buttonValue': 'Register'};
    return {
        login,
        register
    };
}

const header = connect(mapStateToProps)(Header);
export { header as Header };
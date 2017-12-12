import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';
import { alertActions } from '../../actions';
import { history } from '../../helpers';
import classes from '../../styles/components/button.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log ('classes', classes);

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
                        <Link to="/login"> <input type="button" className="btn btnLogin" value="Log in"/></Link>
                        <Link to="/register"><input type="button" className="btn btnSubmit" value="Register"/></Link>  
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
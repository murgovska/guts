import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';

class SettingsPage extends React.Component {
    constructor(props) {
        super(props);
        const { user } = this.props;
        this.state = {
            user: user,
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        
        this.props.user.username = user.username;
        dispatch(userActions.update(user));
    }

    render() {
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Settings for {this.props.user.username}</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn btnUpdate">Update</button>
                        <Link to="/casino" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user,
    };
}

const connectedSettingsPage = connect(mapStateToProps)(SettingsPage);
export { connectedSettingsPage as SettingsPage };
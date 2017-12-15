import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import buttonStyles from '../../../styles/components/button.scss';

class Button extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <button className="btn btn-login"></button>
        );
    }
}

function mapStateToProps(state) {
    const { buttonState } = {'Test':'test'};
    return {
        buttonState
    };
}

const button = connect(mapStateToProps)(Button);
export { button as Button };
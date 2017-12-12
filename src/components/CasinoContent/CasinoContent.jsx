import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CasinoContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <div className="col-md-12">
                    <div className="col-md-6">
                        Casino content
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state
    };
}

const casinoContent = connect(mapStateToProps)(CasinoContent);
export { casinoContent as CasinoContent };
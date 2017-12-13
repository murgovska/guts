import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { categoryActions } from '../../actions';
import { alertActions } from '../../actions';
var FontAwesome = require('react-fontawesome');

class Categories extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        dispatch(categoryActions.getCategories());
    }

    render() {
        if (this.props.state['categories'].items !== undefined) {
            var categories = this.props.state['categories'].items.map(function(item) {
                return (
                    <FontAwesome name={item.icon} className="categoryIcon"/>
                );
              });
              return (
                <div>
                    <div className="col-md-12 categories text-right">
                        {categories}
                    </div>
                </div>
              );
        }
        else {
            return (
                null
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        state
    };
}

const categories = connect(mapStateToProps)(Categories);
export { categories as Categories };
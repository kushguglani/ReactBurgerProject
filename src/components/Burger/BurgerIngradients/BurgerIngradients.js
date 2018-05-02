import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngradients.css'

class BurgerIngradients extends Component {
    render() {
        let ingradients = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                ingradients = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingradients = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingradients = <div className={classes.Meat}></div>;
                break;
            case ('cheese'):
                ingradients = <div className={classes.Cheese}></div>;
                break;
            case ('salad'):
                ingradients = <div className={classes.Salad}></div>;
                break;
            case ('vacon'):
                ingradients = <div className={classes.Bacon}></div>;
                break;
            default:
                ingradients = null;
        }
        return ingradients;
    }
}

BurgerIngradients.propTypes = {
    type : PropTypes.string.isRequired
};

export default BurgerIngradients;

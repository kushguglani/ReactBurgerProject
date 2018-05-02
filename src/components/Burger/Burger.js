import React from 'react';

import classes from './Burger.css';
import BurgerIngradients from './BurgerIngradients/BurgerIngradients';

const Burger = (props)=>{
    let transformIngradients =Object.keys(props.ingradients)
        .map((ingKey)=>{
            return [...Array(props.ingradients[ingKey])]
                .map((_,index)=>{
                    return <BurgerIngradients key ={ingKey+index} type={ingKey} />
                })
        })
        .reduce((arr,el)=>{
            return arr.concat(el);
        },[]);
    // console.log(transformIngradients);
    if(transformIngradients.length === 0){
        transformIngradients = (<p> Please start adding ingradients </p>);
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngradients type="bread-top" />
            {transformIngradients}
            <BurgerIngradients type="bread-bottom" />
        </div>
    );
}
export default Burger;
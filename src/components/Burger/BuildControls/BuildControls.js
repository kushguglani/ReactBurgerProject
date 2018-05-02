import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls =[
    {label:"Cheese",type:"cheese"},
    {label:"Salad",type:"salad"},
    {label:"Vacon",type:"vacon"},
    {label:"Meat",type:"meat"}
];

const buildControls = (props)=>(
        <div className ={classes.BuildControls}>
            {controls.map(ctrl=>(
                <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added = {()=>props.addIngradient(ctrl.type)}
                remove = {()=>props.removeIngradient(ctrl.type)} 
                btnDisabled = {props.disabled[ctrl.type]}/>
            ))}
            
            <button 
                className={classes.OrderButton} 
                disabled={!props.orderButton}
                onClick={props.purchasing}>
                    ORDER NOW {props.orderButton}
            </button>
        </div>
    );


export default buildControls;
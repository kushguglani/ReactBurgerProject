import React from 'react';
import Aux from './../../../hoc/Auxs';
import Button from '../../UI/Button/Button'

const orderSummary = (props)=>{
	const ingradientsList = Object.keys(props.ingradients)
		.map(igKey=>{
			return(<li key={igKey}>
					{igKey}:{props.ingradients[igKey]}
				</li>);
		})
	return(
		<Aux>
			<h3> Your Order </h3>
			<p> A delecious burger with following ingradients </p>
			<ul>
				{ingradientsList}
			</ul>
			<p><strong>Total Price = ${props.price}</strong></p>
			<Button btnType="Danger" clicked ={props.cancelButton}>CANCEL</Button>
			<Button btnType="Success" clicked ={props.continueButton}>CONTINUE</Button>
		</Aux>
		
	);
}

export default orderSummary;
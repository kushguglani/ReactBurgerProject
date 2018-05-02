import React,{Component} from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxs';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

const INGRADIENTS_COST = {
    cheese:0.5,
    salad:0.3,
    vacon:0.4,
    meat:1.5
}

class BurgerBuilder extends Component{
    state = {
        ingradients:{
            cheese:0,
            salad:0,
            vacon:0,
            meat:0
        },
        total:4,
        purchased:false,
        purchasing:false
    }
    ingradientsAdded=(type)=>{
        // const oldCount = this.state.ingradients[type];
        const updatedCount = 1 + this.state.ingradients[type];
        const updatedIngradients = {
            ...this.state.ingradients
        };
        updatedIngradients[type]= updatedCount;
        const updatedPrice = this.state.total+INGRADIENTS_COST[type];

        this.setState({ingradients:updatedIngradients,total:updatedPrice});
        this.orderButton(updatedIngradients);
        
        
    }
    ingradientsRemoved=(type)=>{
        const oldCount = this.state.ingradients[type];
        if(oldCount>0){
            const updatedCount = oldCount -1;
            const updatedIngradients = {
                ...this.state.ingradients
            };
            updatedIngradients[type]= updatedCount;
            const updatedPrice = this.state.total - INGRADIENTS_COST[type];
            this.setState({ingradients:updatedIngradients,total:updatedPrice});
            this.orderButton(updatedIngradients);
        }
    }
    orderButton=(ingradients)=>{
        const disabled = Object.keys(ingradients)
            .map((key)=>{
                return ingradients[key];
            })
            .reduce((total,el)=>{
                return total+el;
            },0);
            this.setState({purchased:disabled>0})
    }
    purchasingOrderHandler=()=>{
        this.setState({purchasing:true});
        console.log(this.state);
    }
    modalCloseHandler=()=>{
        this.setState({purchasing:false});
    }
    modalContinueHandler = ()=>{
        alert("Order Placed ")
    }
    render(){
        let disableInfo = {
            ...this.state.ingradients
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key]<=0;
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} closeModal = {this.modalCloseHandler}>
                    <OrderSummary 
                        ingradients={this.state.ingradients}
                        price = {this.state.total.toFixed(2)}
                        cancelButton = {this.modalCloseHandler}
                        continueButton = {this.modalContinueHandler}
                    />
                </Modal>
                <p>Current Price : <strong>{this.state.total.toFixed(2)}</strong></p>
                <Burger ingradients={this.state.ingradients}/>
                <BuildControls 
                    addIngradient={this.ingradientsAdded}
                    removeIngradient = {this.ingradientsRemoved}
                    disabled = {disableInfo}
                    orderButton = {this.state.purchased}
                    purchasing = {this.purchasingOrderHandler}

                />
            </Aux>
        );
    }
}
export default BurgerBuilder
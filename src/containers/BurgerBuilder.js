import React, {Component} from 'react';
import BuildControls from '../components/BuildControls/BuildControls';
import Burger from '../components/Burger/Burger';
import OrderSummary from '../components/Order Summary/OrderSummary';
import Aux from '../hoc/Aux';
import Modal from '../UI/Modal/Modal';

const PRICE= {
    salad: 0.2, 
    meat: 1,
    cheese: 0.5,
    bacon: 0.4
}

class BurgerBuilder extends Component{
    state= {
        ingridients: {
            salad:0,
            meat:0,
            cheese:0,
            bacon:0
        }, 
        price:4,
        purchaseable: false,
        order: false
    }

    orderHandler() {
        console.log(this.state.order)
        this.setState({
            order: true
        })
    }
    updatePurchasableState(objClone) {
        let sum = Object.keys(objClone)
        .map(igKey => objClone[igKey])
        .reduce((acc, value)=>acc + value)

        this.setState({
            purchaseable: sum>0
        })
        // console.log(this.state.purchaseable)
    }
    addIngridientHandler = (type)=> {
        let oldValue=this.state.ingridients[type]
        let newValue=oldValue + 1 
        let objClone = { ...this.state.ingridients } 
        objClone[type]=newValue
        let priceAddition= this.state.price + PRICE[type]
        this.setState({
            ingridients: objClone,
            price: priceAddition
        })
        this.updatePurchasableState(objClone)
        // this.calculatePrice(type,'+')
    }

    removeIngridinetHandler= type => {
        let oldvalue=this.state.ingridients[type]
        if(oldvalue>0) {
            
            let newValue=oldvalue - 1 
            let objClone= {...this.state.ingridients}
            objClone[type]=newValue
            let priceDeduction = this.state.price - PRICE[type]
            this.setState({
                ingridients: objClone, 
                price: priceDeduction
            })
            this.updatePurchasableState(objClone)
            // this.calculatePrice(type,'-')
        }

    }

    // calculatePrice = (type, operator) => {
    //     let newPrice=(operator==='+')?this.state.price + PRICE[type]:this.state.price - PRICE[type]
    //     this.setState({
    //         price: newPrice
    //     })
    // }
    render() {
        return( 
            <Aux>
                 <Modal show={this.state.order}>
                    <OrderSummary ingridients={this.state.ingridients}/>
                 </Modal> 
                 <Burger ingridients={this.state.ingridients}/>
                 <BuildControls label={this.state.ingridients}
                 add={this.addIngridientHandler}
                 remove={this.removeIngridinetHandler}
                 price={this.state.price}
                 ordered={this.orderHandler.bind(this)}
                 purchaseable={this.state.purchaseable}/>
            </Aux>
        )
           
    }

}

export default BurgerBuilder;
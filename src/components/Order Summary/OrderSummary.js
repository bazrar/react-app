import React from 'react'
import Button from '../../UI/Button/Button'

const OrderSummary = props => {
    const ingridientSummary = Object.keys(props.ingridients)
    .map(igKey => 
        <li key={igKey}>
            <span style={{textTransform:'capitalize'}}>
            {igKey}: {props.ingridients[igKey]}
            </span>
        </li>
    )
    return(
    <div>
        <h1>Order Summary</h1>
        <ul>
            {ingridientSummary}
        </ul>
    <strong>Price: {props.price.toFixed(2)}</strong>
        <p>Ready to checkout ?</p>
        <Button btnType='Success' clicked={props.continue}>Checkout</Button>
        <Button btnType='Danger' clicked={props.cancel}>Cancel</Button>
    </div>
    )   
}

export default OrderSummary;
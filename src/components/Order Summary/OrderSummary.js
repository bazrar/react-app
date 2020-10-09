import React from 'react'

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
        <p>Ready to checkout ?</p>
    </div>
    )   
}

export default OrderSummary;
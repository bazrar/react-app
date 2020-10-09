import React from 'react'
import classes from './NavigationItem.css'
export default function NavigationItem(props) {
    return(
        <div className={classes.NavigationItem}>
            <li><a href='#' active>Checkout</a></li>
            <li><a href="#">Cancel</a></li>
        </div>
        )
} 
import React from 'react'
import classes from './NavigationItem.css'
export default function NavigationItem(props) {
    return(
        <div className={classes.NavigationItem}>
            <li><a href={props.to} className={props.active ? classes.active : null}>{props.children}</a></li>
        </div>
        )
} 
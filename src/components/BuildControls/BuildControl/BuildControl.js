import React from 'react'
import classes from './BuildControl.css'
export default function BuildControl(props) {
    return (
        <div className={classes.BuildControl}>
          <div>{props.label}</div>
          <button onClick= {props.add}>More</button>
          <button onClick= {props.remove}>Less</button>
        </div>
    )
}

import React from 'react'
import classes from './BuildControl.css'
export default function BuildControl(props) {
    return (
        <div className={classes.BuildControl}>
          <div style={{textTransform:'capitalize'}}>{props.label}</div>
          <button onClick= {props.added}>More</button>
          <button onClick= {props.removed}>Less</button>
        </div>
    )
}

import React from 'react'
import classes from './Logo.css'
import logo from '../../assets/images/burger.jpeg'

export default function Logo() {
    return (
        <div className={classes.Logo}>
             <img src= {logo} alt='burger'/>
        </div>
       
    )
}
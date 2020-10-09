import React from 'react'
import Logo from '../Logo/Logo'
import classes from './Toolbar.css'

const Toolbar = props => {
    return (
        <div className={classes.Toolbar}>
             <div>menu</div>
           <Logo/>
            <nav>
                ...
            </nav>
        </div> 
    )
}

export default Toolbar;

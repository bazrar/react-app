import React from 'react'
import Logo from '../Logo/Logo'
import NavigationItem from '../Navigation/NavigationItem/NavigationItem'
import classes from './Toolbar.css'

const Toolbar = props => {
    return (
        <div className={classes.Toolbar}>
             <div>menu</div>
           <Logo/>
            <nav>
                <NavigationItem/>
            </nav>
        </div> 
    )
}

export default Toolbar;

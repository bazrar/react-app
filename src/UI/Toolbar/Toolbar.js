import React from 'react'
import Logo from '../Logo/Logo'
import NaviagtionItems from '../Navigation/NavigationItems/NavigationItems'
import SideDrawer from '../sidedrawer/SideDrawer'
import classes from './Toolbar.css'

const Toolbar = props => {
    return (
        <div className={classes.Toolbar}>
             <SideDrawer/>
             <Logo/>
                <nav>
                    <NaviagtionItems/>
                </nav>
        </div> 
    )
}

export default Toolbar;

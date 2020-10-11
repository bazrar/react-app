import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Aux from '../../hoc/Aux'
export default function SideDrawer(props) {

    return(
        <Aux>
            
            <div className= {classes.SideDrawer}>
             <div className={classes.Logo}>
             <Logo/>
             </div>
            
             <NavigationItems/>
         </div>
        </Aux>
       
        );
}
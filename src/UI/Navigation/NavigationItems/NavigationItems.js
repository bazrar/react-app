import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
export default function NaviagtionItems(props) {
    return (
        <ul className= {classes.NavigationItems}>
            <NavigationItem to="#" active>Home</NavigationItem>
            <NavigationItem to="#">About</NavigationItem>
        </ul>
    )
}
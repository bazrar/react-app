import React from 'react'

import classes from './Burger.css'
import BurgerIngridient from './BurgerIngridient/BrugerIngridient'
export default function Burger(props) {
    let ingridientsList= Object.keys(props.ingridients)
    .map(igKey => [...Array(props.ingridients[igKey])]
    .map((_,idx) => <BurgerIngridient key={igKey + idx} 
    type={igKey}/>))
    .reduce((acc,arr)=>acc.concat(arr), [])
    // console.log(ingridientsList)

    if(ingridientsList.length===0) {
        ingridientsList=<p>Please select the ingridients</p>
    }
    return (
        <div style={{marginTop: '5rem'}}>
             <div className={classes.Burger}>
                <BurgerIngridient type='bread-top'/>
                {ingridientsList}
                <BurgerIngridient type='bread-bottom'/>
            </div> 
        </div>
    )
}

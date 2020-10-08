import React from 'react';
import classes from './BurgerIngridient.css'
const BurgerIngridient = props => {
    let ingridient;
    switch(props.type) {
        case('bread-top'):
        ingridient=<div className={classes.BreadTop}>
            <div className={classes.Seeds1}/>
            <div className={classes.Seeds2}/>
        </div>
        break;
        case('bread-bottom'):
        ingridient=<div className={classes.BreadBottom}/>
        break;
        case('cheese'):
        ingridient=<div className={classes.Cheese}></div>
        break;
        case('salad'):
        ingridient=<div className={classes.Salad}></div>
        break;
        case('bacon'):
        ingridient=<div className={classes.Bacon}></div>
        break;
        case('meat'):
        ingridient=<div className={classes.Meat}></div>
        break;
        default: 
        ingridient=null;
    }
    return(
        ingridient
    )
}
export default BurgerIngridient;

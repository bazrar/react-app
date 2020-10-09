import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css'
const BuildControls = props => {
        let arr=[{name:'salad', type:'salad'},
        {name:'cheese', type:'cheese'},
        {name:'meat', type:'meat'},
        {name:'bacon', type:'bacon'}]

        let arrList=arr.map(element=> <BuildControl 
            key={element.name}    
            label={element.name}
            add={()=>props.add(element.type)}
            remove={()=>props.remove(element.type)}/>);

        // console.log(arrList )
        // console.log(props.purchaseable)
        return (
        <div className={classes.BuildControls}>
            Price: ${props.price.toFixed(2)}
            {arrList}
            <button disabled={!props.purchaseable}
            onClick={props.ordered}>ORDER NOW</button>
        </div>
        );




}
export default BuildControls;
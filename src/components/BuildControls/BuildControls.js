import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css'
const BuildControls = props => {
        let ctrl=[
        {name:'salad', type:'salad'},
        {name:'cheese', type:'cheese'},
        {name:'meat', type:'meat'}]

        let ctrlList=ctrl.map((ctrl,idx)=> {
        return <BuildControl 
            key={ctrl.name}    
            label={ctrl.name}
            added={()=>props.add(ctrl.type)}
            removed={()=>props.remove(ctrl.type)}/>
        });

        // console.log(arrList )
        // console.log(props.purchaseable)
        return (
        <div className={classes.BuildControls}>
            Price: ${props.price.toFixed(2)}
            {ctrlList}
            <button disabled={!props.purchaseable}
            onClick={props.ordered}>ORDER NOW</button>
        </div>
        );




}
export default BuildControls;
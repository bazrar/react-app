import { transform } from '@babel/core';
import React from 'react';
import classes from './Modal.css'
const Modal = props => (
    <div className={classes.Modal}
    style={{
        transform: props.show ? 'transformY(10px)' : 'transformY(-100vh)',
        opacity: props.show ? 0.8:0
        
    }}>
        {props.children}
    </div>
)

export default Modal;

import { transform } from '@babel/core'
import React from 'react'
import Aux from '../../hoc/Aux'

const Layout = props => (
    <Aux>
        <div>menubar, sidebar, navigation</div>
        <main>
            {props.children}
        </main>
    </Aux>
    
)
export default Layout;
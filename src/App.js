import React from 'react';
import  classes from './App.css';
import BurgerBuilder from './containers/BurgerBuilder'
function App() {
  return (
    <div className={classes.App}>
     <div>menubar, slider, navbar</div>
     <BurgerBuilder/>
    </div>
  );
}

export default App;

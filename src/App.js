import React from 'react';
import  classes from './App.css';
import BurgerBuilder from './containers/BurgerBuilder'
import Layout from './components/Layout/Layout'
function App() {
  return (
    <div className={classes.App}>
     <Layout>
     <BurgerBuilder/>
     </Layout>
    
    </div>
  );
}

export default App;

import React from 'react';
import Signin from './containers/signin/signin';
import Output from './containers/output/output';

import './App.css'


const App = () => {
  return (
    <div className="container">
      
    <h1 className="header">Event Parser</h1>
    <br/>
      <Signin/>
      <Output/>


    </div>

  )
}
export default App;

// Home.js

import React, { Component } from 'react';
import AddCounter from '../containers/AddCounter';
import RemoveCounter from '../containers/RemoveCounter';
import Counter from '../containers/Counter';

class Home extends Component {
  render() {
    return (
        <div>
          <h2>Home</h2>
			<Counter></Counter>
    		<br />
    		<div className="columns">
      			<div className="column is-11">
      	    		<AddCounter></AddCounter>
      			</div>
      			<div className="column auto">
          			<RemoveCounter></RemoveCounter>
      			</div>
    		</div>      	
    	</div>

        
    );
  }
}

export default Home;
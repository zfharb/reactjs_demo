import React from 'react';
import Counter from '../containers/Counter';
import AddCounter from '../containers/AddCounter';
import RemoveCounter from '../containers/RemoveCounter';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <div className="container">
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
          </ul>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
    </Router>
    
      
    </div>

  )
}
export default App;

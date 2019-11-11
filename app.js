import React, { Component } from 'react';
import sampleOne from './router/sampleone';
import sampleTwo from './router/sampletwo';
import { BrowserRouter as Router,Route, Switch,Link } from "react-router-dom";

class App extends Component {
    render() {
      return (
        <Router>
          <div>
            <h2>React Router</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/sampleone'} className="nav-link">sampleone</Link></li>
              <li><Link to={'/sampletwo'} className="nav-link">sampletwo</Link></li>
            </ul>
            </nav>
            <hr />
            <Switch>
                <Route path='/sampleone' component={sampleOne}>
                    {/* <sampleOne /> */}
                </Route>
                <Route path='/sampletwo' component={sampleTwo}>
                    {/* <sampleTwo /> */}
                </Route>
            </Switch>
          </div>
        </Router>
    // <div>This is what</div>
      );
    }
  }
  
  export default App;
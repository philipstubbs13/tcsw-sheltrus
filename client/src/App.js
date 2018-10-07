// Global import of React
import React, { Component } from 'react';
// Importing React Router to add page routes.
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Import pages
import Profile from './containers/Profile';
import Shelters from './containers/Shelters';
import Map from './containers/Map';
import Help from './containers/Help';
import Login from './containers/Login';
import IntakeForm from './containers/IntakeForm';
import Ticket from './containers/Ticket';

// Import top level css file for app
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="app-pages">
						<Switch>
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/help" component={Help} />
              <Route exact path="/shelters" component={Shelters} />
              <Route exact path="/form" component={IntakeForm} />
							<Route exact path="/" component={Login} />
							<Route exact path="/ticket" component={Ticket} />
							<Route exact path="/map" component={Map} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

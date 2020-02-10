import React from 'react';
import Login from './components/Login.js';
import Navbar from './components/Navbar.js'
import './App.css';
import auth from './utils/auth';
import Dashboard from './components/Dashboard.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ContextProvider} from './context/ContextProvider.js';
import Users from './components/Users';
import CreateUser from './components/CreateUser';


class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {loginStatus: auth.checkLocalAuth()};
}


loginStatusUpdated(loginStatus) {
  this.setState({loginStatus: loginStatus})
  }


  render() {

    return (
      <ContextProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/users" component={Users} />
            <Route path="/createusers" component={CreateUser} />
          </Switch>
        </Router>
      </ContextProvider>
    );
  }
}


export default App;
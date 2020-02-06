import React from 'react';
import { AppContext, ContextConsumer } from './../context/ContextProvider.js';
import WelcomeMessage from './WelcomeMessage';
import Logout from './Logout.js';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"




class Navbar extends React.Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
    }

    render() {
        return (
        this.context.userLogged && 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" itemID="navbarNavAltMarkup">
          <div className="navbar-nav">
              <a className={'nav-item nav-link'}><Link to="/about">About</Link></a>
          </div>
          <div className="navbar-nav">
              <a className={'nav-item nav-link'}><Link to="/users">Users</Link></a>
          </div>
          <div className="ml-auto" style={{ float: "right"}}>
              <ContextConsumer>
                  {({ processLogout, username}) =>
                  <div>
                      <WelcomeMessage/>
                      <Logout/>
                  </div>
    }
              </ContextConsumer>
        </div>
        </div>
      </nav>);
    }
}

export default Navbar;


import React from 'react';
import Login from './components/Login.js'
import Navbar from './components/Navbar.js'
import './App.css';



class App extends React.Component {

constructor(props) {
  super(props);
  
}


  render() {

    return (
      <div className="App">
         <Navbar/>
        <header className="App-header">
          <br/>
          <Login/>
        </header>
      </div>
    );
  }
}


export default App;
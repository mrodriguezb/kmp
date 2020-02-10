import React from 'react';
import Navbar from './Navbar';
import { AppContext } from './../context/ContextProvider.js';


class CreateUser extends React.Component {
    static contextType = AppContext;

    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        email: '',
      };
    }

    
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }

    handleSubmit(event) {
        alert('Hello!' + this.state.value);
        event.preventDefault();
      }

    render() {
        return  (
            <div className="container">
             
        
          <form onSubmit={this.mySubmitHandler}>
          <p>Choose a username:</p>
          <input
            type='text'
            name='username'
            onChange={this.myChangeHandler}
          />
          <p>Choose a password:</p>
          <input
            type='password'
            name='password'
            onChange={this.myChangeHandler}
          />
          <input
            type='email'
            name='email'
            onChange={this.myChangeHandler}
          />
          <br/>
          <br/>
          <input type='submit' value="Create user"/>
          </form>
          </div>
        );
      }
    }
  
    export default CreateUser;
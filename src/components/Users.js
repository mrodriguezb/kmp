import React from 'react';
import Navbar from './Navbar';
import { AppContext } from './../context/ContextProvider.js';


 
 
class Users extends React.Component {
 
    static contextType = AppContext;

    constructor(props){
        super(props);
        this.state = { users: [] }
        
    }

    componentDidMount() {
        !this.context.userLogged && this.props.history.push("/");
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => {
        this.setState({ users: users })
      })
    }

 
    render() {
        
        return this.context.userLogged && (
            <div className="container">
                <Navbar/>
        
        <h1>Users</h1>
        {
          this.state.users.length == 0
            ? 'Loading users...'
            : this.state.users.map(user => <li>{user.name} - {user.email}</li>)
        }
            </div>
        );
       } 
    }


export default Users;
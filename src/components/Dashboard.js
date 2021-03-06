import React from 'react';
import Navbar from './Navbar';
import { AppContext } from './../context/ContextProvider.js';
import Users from './Users'


 
 
class Dashboard extends React.Component {
 
    static contextType = AppContext;

    constructor(props){
        super(props);
        
    }

    componentDidMount() {
        !this.context.userLogged && this.props.history.push("/");
    }

 
    render() {
        
        return this.context.userLogged && (
            <div className="container">
                
                <Navbar/>
                <div>My Dashboard</div>
            </div>
        );
       } 
    }


export default Dashboard;
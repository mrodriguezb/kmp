import React from 'react';
import auth from '../utils/auth';
import Navbar from './Navbar';


 
 
class Dashboard extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {show : auth.checkLocalAuth()};
        
    }

 
    render() {
        
        return this.state.show && (
            <div className="container">
                <Navbar/>
                <div>My Dashboard</div>
            </div>
        );
       } 
    }


export default Dashboard;
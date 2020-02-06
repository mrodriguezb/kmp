import React from "react";
import {createContext} from 'react';
import auth from './../utils/auth';



export const AppContext = createContext();

export class ContextProvider extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
        userLogged: false,
        name: ""
        };
        this.setUserName = this.setUserName.bind(this)
        this.setUserLogged = this.setUserLogged.bind(this);
        this.processLogout = this.processLogout.bind(this);
    }

    setUserLogged(status){
   
     this.setState({userLogged: status})
    }
    
    processLogout() {
        this.setState({name: ""});
        this.setState({userLogged: false});
        auth.removeUserCredentials()
    }
    
    setUserName(username) {
        this.setState({name: username});
    }

    componentDidMount() {
        auth.checkLocalAuth() && this.setUserValues();
    }

    setUserValues() {
        this.setState({userLogged: true, name: auth.getUserName()});
    }

    render() {
        return (
            <AppContext.Provider value = {{...this.state, setUserLogged:this.setUserLogged, setUserName: this.setUserName, processLogout:this.processLogout}}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export const ContextConsumer = AppContext.Consumer;
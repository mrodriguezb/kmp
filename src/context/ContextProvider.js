import React from "react";
import {createContext} from 'react';



export const AppContext = createContext();

export class ContextProvider extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
        userLogged: false,
        name: ""
        };
        
        this.login = this.login.bind(this);
        this.processLogout = this.processLogout.bind(this);
    }

    login(username){
     this.setState({name: username});
     this.setState({userLogged: true})
    }
    
    processLogout() {
        this.setState({name: ""});
        this.setState({userLogged: false})
    }
    

    render() {
        return (
            <AppContext.Provider value = {{...this.state, login:this.login, processLogout:this.processLogout}}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export const ContextConsumer = AppContext.Consumer;
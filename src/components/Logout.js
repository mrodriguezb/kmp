import React, { useContext } from 'react';
import { AppContext } from './../context/ContextProvider.js';
import  { withRouter } from 'react-router';

function Logout (props) {
    const processLogout = () => {
        context.processLogout();
        props.history.push("/");

    }
    const context = useContext(AppContext)
    return <input type = "button" value = "Logout" onClick={processLogout}/>;
    
}

export default withRouter(Logout);
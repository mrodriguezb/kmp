import React, { useContext } from 'react';
import { AppContext } from './../context/ContextProvider.js';

function WelcomeMessage(props) {
    const context = useContext(AppContext);
    return <h1>Hello, {context.name}!</h1>;
}

export default WelcomeMessage;
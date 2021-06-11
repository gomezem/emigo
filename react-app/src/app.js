import React from 'react';
import ReactDOM from 'react-dom';
import VerticalTabs from './navbar.js';

const App = ()=>{
    return(
        <div>
            <VerticalTabs></VerticalTabs>
            <h1>Hello world</h1>
            <h3>About Me</h3>
            <p>My name is Emily and I am from Nebraska.</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
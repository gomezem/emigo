import React from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
    return(
        <div>
            <h1>Hello world</h1>
            <h3>About Me</h3>
            <p>My name is Emily and I am from Nebraska.</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import App from './App';

class Index extends Component {
    render() {
        return (
            <div>
                <App />
                <App />
            </div>
        )
    }
}

ReactDom.render(<Index />, document.getElementById('root'))
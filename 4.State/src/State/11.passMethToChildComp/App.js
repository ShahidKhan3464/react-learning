import React, { Component } from 'react'
import Parent from './Parent'
import Name from './Name';
import Clock from './Clock';

class App extends Component {
    render() {
        return (
            <div>
                <Parent />
                <Name />
                <Clock />
            </div>
        )
    }
}

export default App;
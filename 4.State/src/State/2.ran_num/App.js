import React, { Component } from 'react'
import Random from './Random'

class App extends Component {
    render() {
        return (
            <div>
                <Random max_no={8} />
            </div>
        )
    }
}

export default App;
import React, { Component } from 'react'
import LifeCycle from './LifeCycle'
import Ajax from './Ajax'

class App extends Component {
    render() {
        return (
            <div>
                <LifeCycle />
                {/* <Ajax/> */}
            </div>
        )
    }
}

export default App;
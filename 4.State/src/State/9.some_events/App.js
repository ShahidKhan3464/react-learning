import React, { Component } from 'react'
import MouseEvent from './MouseEvent'
import KeyEvent from './KeyEvent'
import CopyEvent from './CopyEvent'

class App extends Component {
    render() {
        return (
            <div>
                <MouseEvent />
                <KeyEvent />
                <CopyEvent />
            </div>
        )
    }
}

export default App;
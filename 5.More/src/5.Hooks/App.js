import React, { Component } from 'react'
import CounterClass from './CounterClass'
import CounterHook from './UseState'
import Toggler from './CustomHook'
import SimpleForm from './CustomForm'
import Clicker from './UseEffect'
import Movies from './ApiCalls'

class App extends Component {
    render() {
        return (
            <div>
                {/* <CounterClass />
                <CounterHook />
                <Toggler />
                <SimpleForm />
                <Clicker /> */}
                <Movies />
            </div>
        )
    }
}

export default App
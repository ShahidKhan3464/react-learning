import React, { Component } from 'react'

class CounterClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <h1>Counter : {this.state.count}</h1>
                <button onClick={this.handleClick}>Counter</button>
            </div>
        )
    }
}

export default CounterClass
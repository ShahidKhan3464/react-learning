import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = { change: 1 }
        console.log('IN CONSTRUCTOR')
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        console.log('IN MOUNT')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('IN UPDATE')
        console.log(prevState.change)
        console.log(this.state.change)
    }

    componentWillUnmount() {
        console.log('IN UNMOUNT')
    }

    handleClick() {
        const random = Math.floor(Math.random() * 10)
        this.setState({ change: random })
    }

    render() {
        console.log('IN RENDER')
        return (
            <div>
                <h1>Mounting</h1>
                <p>State is : {this.state.change}</p>
                <button onClick={this.handleClick}>Change State</button>
            </div>
        )
    }
}

export default LifeCycle;
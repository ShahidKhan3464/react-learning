import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        alert('Successfully logged in')
        this.props.history.push('/food/burger')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Log in</button>
                <button onClick={this.props.history.goBack}>Go back</button>
            </div>
        )
    }
}

export default withRouter(Navbar);
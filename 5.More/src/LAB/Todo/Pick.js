import React, { Component } from 'react'

export default class Pick extends Component {
    render() {
        return (
            <div>
                <br />
                <button onClick={this.props.pick}>Pick Task</button>
            </div>
        )
    }
}

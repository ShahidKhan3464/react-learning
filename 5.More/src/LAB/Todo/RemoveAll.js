import React, { Component } from 'react'

export default class RemoveAll extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.removeAll}>Remove All</button>
            </div>
        )
    }
}

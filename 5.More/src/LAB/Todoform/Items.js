import React, { Component } from 'react'

export default class Items extends Component {
    constructor(props) {
        super(props)
        this.handleRemove = this.handleRemove.bind(this)
    }

    handleRemove() {
        this.props.remove(this.props.task)
    }

    render() {
        return (
            <div>
                <li> {this.props.task}
                    <button onClick={this.handleRemove}>X</button>
                </li>
            </div>
        )
    }
}

import React, { Component } from 'react'

class Name extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <h1>Input Event</h1>
                <input onChange={this.handleNameChange} />
                <p>{this.state.name}</p>
            </div>
        );
    }
}

export default Name;
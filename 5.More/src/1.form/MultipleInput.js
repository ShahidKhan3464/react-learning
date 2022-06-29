import React, { Component } from 'react'

class MultipleInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: ''

        }
        this.onChange = this.onChange.bind(this)
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>Form Demo</h1>
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='userName' value={this.state.userName} onChange={this.onChange} />
                    <input type='email' name='email' value={this.state.email} onChange={this.onChange} />
                    <input type='password' name='password' value={this.state.password} onChange={this.onChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default MultipleInput;
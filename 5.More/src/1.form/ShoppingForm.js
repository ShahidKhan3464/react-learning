import React, { Component } from 'react'

class Shopform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            qty: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state)
        this.setState({
            name: '',
            qty: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Shops Form</h1>
                <form onSubmit={this.onSubmit}>
                    <label for='name'>Item : </label>
                    <input type='text' name='name' value={this.state.name} onChange={this.onChange} />

                    <label for='qty'>Quanttiy: </label>
                    <input type='text' name='qty' value={this.state.qty} onChange={this.onChange} />
                    <button>Add item</button>
                </form>
            </div>
        )
    }
}

export default Shopform;
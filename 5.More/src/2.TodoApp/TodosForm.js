import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.css'

class TodosForm extends Component {
    constructor(props) {
        super(props)
        this.state = { task: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.create({ ...this.state, id: uuidv4() })
        this.setState({
            task: ''
        })
    }

    render() {
        return (
            <div className='TodoForm'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='todo'>New Todo : </label>
                    <input
                        type='text'
                        name='task'
                        id='todo'
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default TodosForm;
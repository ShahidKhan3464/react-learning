import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: this.props.todo,
            isEdit: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick() {
        this.props.remove(this.props.id)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUpdate(e) {
        e.preventDefault()
        this.props.update(this.props.id, this.state.task)
        this.setState({ isEdit: false })
    }

    toggleForm() {
        this.setState({ isEdit: true })
    }

    render() {
        let result
        if (this.state.isEdit) {
            result = (
                < div className='Todo'>
                    <form onSubmit={this.handleUpdate}>
                        <input type='text' name='task' value={this.state.task} onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div >
            )
        }
        else {
            result = (
                <div className='Todo'>
                    <li> {this.props.todo} </li>
                    <div className='buttons'>
                        <button onClick={this.toggleForm} className='edit'>Edit</button>
                        <button onClick={this.handleClick}>Delete</button>
                    </div>
                </div>
            )
        }
        return result
    }
}

export default Todo;
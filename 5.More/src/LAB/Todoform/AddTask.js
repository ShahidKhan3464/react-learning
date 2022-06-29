import React, { Component } from 'react'

export default class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state= {error: null}
        // this.state = { value: '' }
        // this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // handleChange(e) {
    //     this.setState({ value: e.target.value })
    // }

    // handleSubmit(e) {
    //     e.preventDefault()
    //     this.props.addTask(this.state.value)
    //     this.setState({ value: '' })
    // }

    handleSubmit(e){
        e.preventDefault()
        let text = e.target.elements.taskName.value
        if(text === ''){
            this.setState({error: 'Empty is not allowed'})
            return;
        }
        this.props.addTask(text)
        e.target.elements.taskName.value = ''
    }

    render() {
        return (
            <div>
                {this.state.error && <p> {this.state.error} </p>}
                <form onSubmit={this.handleSubmit}>
                    {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
                    <input type="text" name='taskName'/>
                    <input type="submit" value="Add Task" />
                </form>
            </div>
        )
    }
}

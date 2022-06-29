import React, { Component } from 'react'
import AddTask from './AddTask'
import Pick from './Pick'
import Items from './Items'
import RemoveAll from './RemoveAll'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: []
        }
        this.addTask = this.addTask.bind(this)
        this.pick = this.pick.bind(this)
        this.remove = this.remove.bind(this)
        this.removeAll = this.removeAll.bind(this)
    }

    addTask(task) {
        this.setState(prev => {
            return { task: [...prev.task, task] }
        })
    }

    pick() {
        const pick = this.state.task[Math.floor(Math.random() * this.state.task.length)]
        alert(pick)
    }

    remove(task) {
        this.setState({ task: this.state.task.filter(t => t !== task) })
    }

    removeAll() {
        this.setState({ task: [] })
    }

    render() {
        const task = this.state.task.map(task => <Items task={task} remove={this.remove} />)
        return (
            <div>
                <AddTask addTask={this.addTask} />
                <Pick pick={this.pick} />
                <ul>
                    {task}
                </ul>
                <RemoveAll removeAll={this.removeAll} />
            </div>
        )
    }
}

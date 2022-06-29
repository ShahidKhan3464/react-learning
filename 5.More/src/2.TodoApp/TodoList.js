import React, { Component } from 'react'
import Todo from './Todo'
import TodosForm from './TodosForm'
import RemoveAll from './RemoveAll'
import './Todolist.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
        this.create = this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
        this.removeAll = this.removeAll.bind(this)
    }

    create(newTodo) {
        this.setState(st => ({
            todos: [...st.todos, newTodo]
        }))
    }

    remove(id) {
        this.setState(
            { todos: this.state.todos.filter(t => t.id !== id) }
        )
    }

    update(id, taskUpdate) {
        const newUpdate = this.state.todos.map(updating => {
            if (updating.id === id) {
                return { ...updating, task: taskUpdate }
            }
            return updating;
        })
        this.setState({ todos: newUpdate })
    }

    removeAll() {
        this.setState({ todos: [] })
    }

    render() {
        const todos = this.state.todos.map(todo => <Todo
            key={todo.id}
            id={todo.id}
            todo={todo.task}
            remove={this.remove}
            update={this.update}
        />)
        return (
            <div className='Todolist'>
                <h1>Todo List!</h1>
                <TodosForm create={this.create} remove={this.remove} />
                <ul>
                    {todos}
                </ul>
                <RemoveAll removeAll={this.removeAll} />
            </div>
        )
    }
}

export default TodoList;
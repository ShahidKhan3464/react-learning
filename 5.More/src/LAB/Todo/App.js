import React, { Component } from 'react'
import TodoList from './TodoList';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <TodoList />
            </div>
        )
    }
}
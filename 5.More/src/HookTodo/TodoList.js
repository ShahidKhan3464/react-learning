import React, { useState } from 'react'
import Todo from './Todo'
import TodosForm from './TodosForm'
import './Todolist.css'

function TodoList() {
    const todo = []
    const [todoValue, setTodo] = useState(todo)

    const create = (newTodo) => {
        setTodo([...todoValue, newTodo])
    }

    const remove = (id) => {
        setTodo(todoValue.filter(t => t.id !== id))
    }

    const todos = todoValue.map(todo => <Todo
        key={todo.id}
        id={todo.id}
        todo={todo.task}
        remove={remove}
    />)
    return (
        <div className='Todolist'>
            <h1>Todo List!</h1>
            <TodosForm create={create} />
            <ul>
                {todos}
            </ul>
        </div>
    )
}

export default TodoList;
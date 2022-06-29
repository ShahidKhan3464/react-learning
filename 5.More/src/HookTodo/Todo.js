import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import './Todo.css'

function Todo(props) {
    const handleClick = () => {
        props.remove(props.id)
    }

    return (
        <div className='Todo'>
            <li> {props.todo} </li>
            <div className='buttons'>
                <button onClick={handleClick}>
                    <DeleteIcon />
                </button>
            </div>
        </div>
    )
}

export default Todo;
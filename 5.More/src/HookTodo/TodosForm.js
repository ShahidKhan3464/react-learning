import React from 'react'
import useForm from './CustomHook'
import { v4 as uuidv4 } from 'uuid';
// import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import './TodoForm.css'

function TodosForm(props) {
    const [value, handleChange, reset] = useForm('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.create({ task: value, id: uuidv4() })
        reset()
    }

    return (
        <div className='TodoForm'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Add New Todo'
                    value={value}
                    onChange={handleChange}
                />
                <button><Add /></button>

                {/* <button><Button><Add/></Button></button> */}
            </form>
        </div>
    )
}

export default TodosForm;
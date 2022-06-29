import React from 'react'
import useForm from './useForm'

function SimpleForm() {
    // const [name, setName] = useState('')
    // const handleChange = (e) => setName(e.target.value)
    const [name, UpdateName, reset] = useForm('')

    return (
        <div>
            <h1>The value is {name}</h1>
            <input type="text" value={name} onChange={UpdateName} />
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default SimpleForm;
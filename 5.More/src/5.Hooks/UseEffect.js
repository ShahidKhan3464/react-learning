import React, { useState, useEffect } from 'react'

function CounterHook() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        alert('UseEffect')
    })
    return (
        <div>
            <h1>UseEffect: {count} </h1>
            <button onClick={() => setCount(count + 1)}>Counter</button>
        </div>
    )
}

export default CounterHook
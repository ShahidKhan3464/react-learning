import React from 'react'
import useToggle from './useToggle'

function Toggler() {
    const [Ishappy, toggleIshappy] = useToggle(true)
    const [IsheartBroken, toggleIsheartBroken] = useToggle(false)
    return (
        <div>
            <h1 onClick={toggleIshappy}>{Ishappy ? 'I am happy' : 'I am sad'}</h1>
            <h1 onClick={toggleIsheartBroken}>{IsheartBroken ? 'I am heartBroken' : 'I am not heartBroken'}</h1>
        </div>
    )
}

export default Toggler
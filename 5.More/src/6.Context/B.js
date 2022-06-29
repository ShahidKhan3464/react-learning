import { useContext } from 'react'
// import { city, contact } from './App'
import { city } from './App'

const B = () => {
    const consume1 = useContext(city)
    // const consume2 = useContext(contact)
    return (
        <div>
            <h1>I am shahid belongs to {consume1.cty} and this is my contact no {consume1.cell} </h1>
        </div>
    )
}

export default B
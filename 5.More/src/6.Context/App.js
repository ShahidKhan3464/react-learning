import React, { Component, createContext } from 'react'
import A from './A'

export const city = createContext()
// export const contact = createContext()

class App extends Component {
    render() {
        const obj = {
            cty: 'peshawar',
            cell: 12345
        }
        return (
            <div>
                <city.Provider value={obj}>
                    {/* <contact.Provider value={12345}>
                        <A />
                    </contact.Provider> */}
                    <A />
                </city.Provider>
            </div>
        )
    }
}

export default App;
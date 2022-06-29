import React, { Component } from 'react'
import Child from './Child'

class NumberList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: [1, 2, 3, 4]
        }
        this.remove = this.remove.bind(this)
    }

    remove(no) {
        console.log("REMOVING")
        console.log(no)
        this.setState(st => {
            return {
                number: st.number.filter(n => n !== no)
            }
        })
    }

    render() {
        let num = this.state.number.map(no => {
            return <Child value={no} remove={this.remove} />
        })
        return (
            <div>
                <h1>NumberList</h1>
                <ul> {num} </ul>
            </div>
        )
    }
}

export default NumberList;
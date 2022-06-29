import React, { Component } from 'react'
import fruits from "./fruits";
import { choice, remove } from "./arrayExp";

class App extends Component {
    render() {
        let fruit = choice(fruits)
        let remaining = remove(fruits, fruit)
        return (
            <div>
                <p> {`I'd like one ${fruit}, please.`} </p>
                <p> {`Here you go : ${fruit}`} </p>
                <p> Delicious: May I have another? </p>
                <p> {`I'm sorry, we're all out. We have ${remaining.length} other foods left.`} </p>
                <br />
            </div>
        )
    }
}

export default App;
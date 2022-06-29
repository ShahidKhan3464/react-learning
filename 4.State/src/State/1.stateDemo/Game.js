import React, { Component } from 'react'

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            player: 'shahid',
            score: 98,
            result: 'Winner'
        }
    }
    render() {
        let { player, score, result } = this.state
        return (
            <div>
                <h1> Player is : {player}</h1>
                <h1> Score is : {score}</h1>
                <h1> Result is : {result}</h1>
            </div>
        )
    }
}

export default Game;
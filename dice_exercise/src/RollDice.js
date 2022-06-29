import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props) {
        super(props)
        this.state = {
            die1: 'one',
            die2: 'one',
            rolling: false
        }
    }

    roll = (e) => {
        const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]

        this.setState({ die1: newDie1, die2: newDie2, rolling: true })

        setTimeout(() => {
            this.setState({ rolling: false })
        }, 1000);

    }

    render() {
        let { die1, die2, rolling } = this.state
        return (
            <div className='RollDice'>
                <Die face={die1} />
                <Die face={die2} />
                <button onClick={this.roll} disabled={rolling}> {rolling ? 'Rolling' : 'Roll Dice'} </button>
            </div>
            
        )
    }
}

export default RollDice;
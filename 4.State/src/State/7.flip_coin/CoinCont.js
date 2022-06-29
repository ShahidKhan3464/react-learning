import React, { Component } from 'react'
import Coin from './Coin';
import { choice } from './Helper'

class Flip extends Component {
    static defaultProps = {
        coins: ['head', 'tail']
    }
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            noFlips: 0,
            noHeads: 0,
            noTails: 0
        }
    }

    flipCoin = () => {
        const newCoin = choice(this.props.coins)
        console.log(newCoin)

        this.setState(curState => {
            return {
                currCoin: newCoin,
                noFlips: curState.noFlips + 1,
                noHeads: curState.noHeads + (newCoin === 'head' ? 1 : 0),
                noTails: curState.noTails + (newCoin === 'tail' ? 1 : 0)
            }
        })
    }

    render() {
        let { currCoin, noFlips, noHeads, noTails } = this.state
        return (
            <div>
                <h1>Let's Flip a coin!</h1>
                {currCoin && <Coin side={currCoin} />}
                <button onClick={this.flipCoin}>Flip Me</button>
                <p>Out of {noFlips} flips, there have been {noHeads} heads and {noTails} tails.</p>
            </div>
        )
    }
}

export default Flip;
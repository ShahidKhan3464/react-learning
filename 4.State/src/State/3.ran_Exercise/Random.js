import React, { Component } from 'react'

class Random extends Component {
    state = {
        number: 1,
        isWinner: false
    }

    getRandom = (e) => {
        let randomNo = Math.floor(Math.random() * this.props.ten) + 1
        this.setState({ number: randomNo })
        randomNo === 7
            ? this.setState({ isWinner: true })
            : this.setState({ isWinner: false })
    }

    render() {
        let { number, isWinner } = this.state
        return (
            <div>
                <h1>My Number is : {number} </h1>
                {isWinner
                    ? <h1> You Won </h1>
                    : <button onClick={this.getRandom}>Random No</button>
                }
            </div>
        )
    }
}

export default Random;
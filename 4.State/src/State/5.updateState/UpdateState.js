import React, { Component } from 'react'

class UpdateState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        }
    }

    // All Below given f*ns are about to update the state but with some concept

    // i) This is not a valid way, Although it works properly
    singleKill = () => {
        this.setState({ score: this.state.score + 1 })
    }

    // ii) This is also not valid, Because it gives us unrequired result
    // tripleKill = () => {
    //     this.setState({ score: this.state.score + 1 })
    //     this.setState({ score: this.state.score + 1 })
    //     this.setState({ score: this.state.score + 1 })
    // }

    // iii) This is the correct way to update the state: Original way
    // tripleKill = () => {
    //     this.setState(st => {
    //         return { score: st.score + 1 }
    //     })
    //     this.setState(st => {
    //         return { score: st.score + 1 }
    //     })
    //     this.setState(st => {
    //         return { score: st.score + 1 }
    //     })
    // }

    // iv) This is the perfect way based on the origial way
    increment(curState) {
        return { score: curState.score + 1 }
    }

    tripleKill = () => {
        this.setState(this.increment)
        this.setState(this.increment)
        this.setState(this.increment)
    }

    render() {
        return (
            <div>
                <h1>My Score is : {this.state.score} </h1>
                <button onClick={this.singleKill}>Single Kill</button>
                <button onClick={this.tripleKill}>Triple Kill</button>
            </div>
        )
    }
}

export default UpdateState;
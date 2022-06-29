import React, { Component } from 'react'

class Random extends Component {
    constructor(props) {
        super()
        this.state = {
            num: 0
        }
        // this.state.num = 45

        this.timer();
    }

    timer() {
        setInterval(() => {
            let ranNo = Math.floor(Math.random() * this.props.max_no)
            this.setState({ num: ranNo })
        }, 1000);
    }

    render() {
        return (
            <div>
                <h1>Counter : {this.state.num} </h1>
            </div>
        )
    }
}

export default Random;
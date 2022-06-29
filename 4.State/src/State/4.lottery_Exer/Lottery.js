import React, { Component } from 'react'
import Ball from './Ball'
import './Lottery.css'

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        noBalls: 6,
        maxNo: 40
    }

    constructor(props) {
        super(props)
        this.state = {
            num: Array.from({ length: this.props.noBalls })
        }
    }

    generateNo = () => {
        this.setState(curState => {
            return {
                num: curState.num.map(
                    n => Math.floor(Math.random() * this.props.maxNo) + 1)
            }
        })
    }

    render() {
        return (
            <section className='Lottery'>
                <h1>{this.props.title}</h1>
                <div>
                    {
                        this.state.num.map(n => <Ball num={n} />)
                    }
                </div>
                <button className='Generate' onClick={this.generateNo}>Generate</button>
            </section>
        )
    }
}

export default Lottery;
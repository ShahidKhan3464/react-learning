import React, { Component } from 'react'
import axios from 'axios'

class Ajax extends Component {
    constructor(props) {
        super(props)
        this.state = { quote: '' }
    }

    async componentDidMount() {
        let response = await axios.get('https://api.github.com/zen')
        this.setState({ quote: response.data })
    }

    render() {
        return (
            <div>
                <h1>Ajax Request</h1>
                <p>{this.state.quote}</p>
            </div>
        )
    }
}

export default Ajax;
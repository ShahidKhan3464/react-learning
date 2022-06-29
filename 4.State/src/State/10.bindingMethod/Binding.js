import React, { Component } from 'react'

class Binding extends Component {
    static defaultProps = {
        color: ['red', 'blue', 'green', 'yellow']
    }
    state = {
        color: 'cyan'
    }

    changeColor = (newColor) => {
        this.setState({ color: newColor })
    }

    render() {
        return (
            <div style={{ background: this.state.color }}>
                {
                    this.props.color.map(col => {
                        const bgCol = { backgroundColor: col }
                        return <button onClick={() => this.changeColor(col)} style={bgCol}>Click Me</button>
                    })
                }
            </div>
        )
    }
}

export default Binding;
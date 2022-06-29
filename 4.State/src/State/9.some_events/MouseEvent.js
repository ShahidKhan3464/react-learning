import React, { Component } from 'react'
import './MouseEvent.css'

class MouseEvent extends Component {
    mouseEnter() {
        alert('MouseEnter event triggered')
    }
    render() {
        return <div className='MouseEvent' onMouseEnter={this.mouseEnter}></div>
    }
}

export default MouseEvent;
import React, { Component } from 'react'

class KeyEvent extends Component {
    KeyEvent() {
        alert('KeyEvent triggered')
    }
    render() {
        return <textarea onKeyUp={this.KeyEvent}></textarea>
    }
}

export default KeyEvent;
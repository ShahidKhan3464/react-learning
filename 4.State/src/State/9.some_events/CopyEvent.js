import React, { Component } from 'react'

class CopyEvent extends Component {
    copy() {
        alert('CopyEvent triggered')
    }
    render() {
        return <section onCopy={this.copy}>
            A quick brown fox jumps over the lazy dog
            A quick brown fox jumps over the lazy dog
            A quick brown fox jumps over the lazy dog
            A quick brown fox jumps over the lazy dog
            A quick brown fox jumps over the lazy dog
            A quick brown fox jumps over the lazy dog
            A quick brown fox jumps over the lazy dog
        </section>
    }
}

export default CopyEvent;
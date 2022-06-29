import React, { Component } from 'react'

class Contact extends Component {

    componentDidMount() {
        console.log('In Mount')
    }

    componentWillUnmount() {
        console.log('In Unmount')
    }

    render() {
        return (
            <div>
                <h1>This is Contact page</h1>
                <p>This is my contact no : {this.props.contact} </p>
            </div>
        )
    }
}

export default Contact;
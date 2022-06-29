import React, { Component } from 'react'

class IconList extends Component {
    static defaultProps = {
        options: [
            'angry',
            'anchor',
            'archive',
            'at',
            'baby',
            'bell',
            'bolt',
            'bone',
            'car',
            'city',
            'cloud',
            'couch'
        ]
    }
    state = {
        iconArray: ['bone']
    }

    // addIcon = () => {
    //     let newIcon = this.props.options[Math.floor(Math.random() * this.props.options.length)]
    //     this.state.iconArray.push(newIcon)                      // it also works properly but not a valid way to do
    //     this.setState({ iconArray: this.state.iconArray })
    // }

    // This is the valid way to make the copy of the array
    addIcon = () => {
        let newIcon = this.props.options[Math.floor(Math.random() * this.props.options.length)]
        this.setState({ iconArray: [...this.state.iconArray, newIcon] })
    }

    render() {
        let icon = this.state.iconArray.map((i) => <i className={`fas fa-${i}`} />)
        return (
            <div>
                <h1>My Icon is : {icon} </h1>
                <button onClick={this.addIcon}> Add New Icon </button>
            </div>
        )
    }
}

export default IconList;
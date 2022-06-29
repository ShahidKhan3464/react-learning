import React, { Component } from 'react'
import ShoppingForm from './ShoppingForm'
class Items extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                { name: 'Apple', qty: '2-Kilo' },
                { name: 'Banana', qty: '2-Dozen' }
            ]
        }
        // this.ShopsItems = this.ShopsItems.bind(this)
        this.addItem = this.addItem.bind(this)
    }

    addItem(item) {
        this.setState(st => ({
            items: [...st.items, item]
        }))
    }

    ShopsItems() {
        return (
            <ul>
                {
                    this.state.items.map(item => <li> {item.name} : {item.qty} </li>)
                }
            </ul>
        )
    }


    render() {
        return (
            <div>
                <h1>ShoppingItems</h1>
                {this.ShopsItems()}
                <ShoppingForm addItem={this.addItem} />
            </div>
        )
    }
}

export default Items
import React from 'react'
import Item from './Item'
import Search from './Search'
import './App.css'

export default function App() {
    return (
        <div className='App'>
            <div className="ui vertical menu">
                <Item item='Inbox' isActive={true} value={1} />
                <Item item='Social' value={20} />
                <Item item='Spam' value={30} />
                <Search search='Search mail...' />
            </div>
        </div>
    )
}

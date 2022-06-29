import React, { Component } from 'react'
import Form from './Form';
import MultipleInput from './MultipleInput'
import ShoppingItems from './ShoppingItems';


class App extends Component {
    render() {
        return (
            <div>
                <Form />
                <MultipleInput />
                <ShoppingItems/>
            </div>
        )
    }
}

export default App;
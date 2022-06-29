import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({ query: e.target.value })
    }

    // Pushing onto the history props
    handleClick() {
        alert('SAVED YOUR FOOD TO DB')
        this.props.history.push(`/food/${this.state.query}`)
    }

    render() {
        return (
            <div className='Food'>
                <h1>Search For a Food</h1>
                <input
                    type='text'
                    placeholder='search for a food'
                    value={this.state.query}
                    onChange={this.handleChange}
                />
                <Link to={`/food/${this.state.query}`}>Search</Link>
                <button onClick={this.handleClick}>Save New Food</button>
            </div>
        )
    }
}

export default Search;
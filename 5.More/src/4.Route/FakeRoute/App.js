import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 'home'
        }
        // this.changePage = this.changePage.bind(this)
    }

    changePage(newPage) {
        this.setState({ page: newPage })
    }

    renderPage() {
        if (this.state.page === 'home') return <Home />
        else if (this.state.page === 'about') return <About />
        else if (this.state.page === 'contact') return <Contact />
    }

    render() {
        return (
            <div>
                <nav>
                    <a onClick={() => this.changePage('home')}>Home</a>
                    <a onClick={() => this.changePage('about')}>About</a>
                    <a onClick={() => this.changePage('contact')}>Contact</a>
                </nav>
                {this.renderPage()}
            </div>
        )
    }
}

export default App
import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

class App extends Component {

    render() {
        return (
            <div>
                <nav>
                    {/* Used to avoid page from reloading it seems like get request */}
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>

                </nav>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />

                    {/* Component will instantiate a new contact every time */}
                    <Route exact path='/contact' component={Contact} />
                    {/* Render will re-use the existing  contact component */}
                    <Route exact path='/contact' render={() => <Contact contact='03040099097' />} />
                </Switch>
            </div>
        )
    }
}

export default App
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Food from './SingleURL'
import Meal from './MultiURL'
import Search from './Search'
import Navbar from './Navbar'

class App extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route
                        exact
                        path='/'
                        // component={Search}
                        render={routeProps => <Search {...routeProps} />}
                    />
                    <Route
                        exact
                        path='/food/:name'
                        // render={routeProps => <Food name={routeProps.match.params.name} />}
                        render={routeProps => <Food {...routeProps} />}
                    />
                    <Route
                        exact
                        path='/food/:foodName/drink/:drinkName'
                        component={Meal}
                    />
                    <Route render={() => <h1>404 Error!!</h1>} />
                </Switch>
            </div>
        )
    }
}

export default App
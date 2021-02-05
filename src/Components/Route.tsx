import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from '../Routes'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
)

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}

export default AppRouter
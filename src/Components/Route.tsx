import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import { Home, About, Contact, Service } from '../Routes'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Service/:name" component={Service} />
    </Switch>
)

const AppRouter = () => {
    return (
        <BrowserRouter basename={"/Back2LivingRoom_Hackathon/"}>
            <Routes />
        </BrowserRouter>
    )
}

export default withRouter(AppRouter)
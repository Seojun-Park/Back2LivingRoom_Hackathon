import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import { Home, About, Service, Contact } from '../Routes'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Services" component={Service} />
        <Route path="/Contact" component={Contact} />
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
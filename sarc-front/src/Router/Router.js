import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from '../pages/Login'
import Menu from '../pages/Menu'
import User from '../pages/User'
import Conts from '../pages/Conts'

function router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/Menu">
                    <Menu />
                </Route>
                <Route path="/User">
                    <User />
                </Route>
                <Route path="/Conts">
                    <Conts />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default router

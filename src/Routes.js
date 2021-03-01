import React from 'react';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import RouteWithLayout from './router/RouteWithLayout'
import LoginLayout from './router/LoginLayout'
import MainLayout from './router/MainLayout'
import HomePage from './components/HomePage/HomePage'

function Routes() {

    return (
        <>

            <Switch>

                <RouteWithLayout
                    component={Login}
                    exact
                    layout={LoginLayout}
                    path="/login"
                />

                <RouteWithLayout
                    component={HomePage}
                    exact
                    layout={MainLayout}
                    path="/home"
                />
                 <Redirect to='/login' /> 

            </Switch>
        </>
    )
}

export default Routes

import React from 'react';
import Login from '../components/Login/Login';
import YandexMap from '../components/YandexMap/YandexMap';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import RouteWithLayout from './RouteWithLayout'
import LoginLayout from './LoginLayout'
import MainLayout from './MainLayout'
import OrganizationsPage from "./../pages/OrganizationsPage"
import Program from '../components/HomePage/Program';

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
                    component={Program}
                    exact
                    layout={MainLayout}
                    path="/home"
                />
                <RouteWithLayout
                    component={OrganizationsPage}
                    exact
                    layout={MainLayout}
                    path="/organization"
                />
                {/* <Redirect to='/login' /> */}

            </Switch>
        </>
    )
}

export default Routes

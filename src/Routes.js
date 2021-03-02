import React from 'react';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import RouteWithLayout from './router/RouteWithLayout'
import LoginLayout from './router/LoginLayout'
import MainLayout from './router/MainLayout'
import Program from './components/HomePage/Program'
import OrganizationsPage from "./pages/OrganizationsPage"
import CategoriesPage from "./pages/CategoriesPage"

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
                    path="/program"
                />
                <RouteWithLayout
                    component={OrganizationsPage}
                    exact
                    layout={MainLayout}
                    path="/organization"
                />

               <RouteWithLayout
                    component={CategoriesPage}
                    exact
                    layout={MainLayout}
                    path="/category"
                />
                 <Redirect to='/login' /> 

            </Switch>
        </>
    )
}

export default Routes

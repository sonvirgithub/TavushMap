import React from "react";
import Login from "./components/Login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import RouteWithLayout from "./router/RouteWithLayout";
import LoginLayout from "./router/LoginLayout";
import MainLayout from "./router/MainLayout";
import HomePage from "./components/HomePage/HomePage";
import OrganizationsPage from "./pages/OrganizationsPage";
import CategoriesPage from "./pages/CategoriesPage";
import SupportTypesPage from "./pages/SupportTypesPage";

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
        <RouteWithLayout
          component={SupportTypesPage}
          exact
          layout={MainLayout}
          path="/supportType"
        />
        <Redirect to="/login" />
      </Switch>
    </>
  );
}

export default Routes;

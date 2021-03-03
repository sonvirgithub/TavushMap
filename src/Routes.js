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
import HomePage from "./components/HomePage/Program";
import OrganizationsPage from "./pages/OrganizationsPage";
import CategoriesPage from "./pages/CategoriesPage";
import SupportTypesPage from "./pages/SupportTypesPage";

import ProgramsPage from "./pages/ProgramsPage";
import SettingPage from "./pages/SettingPage";


function Routes({ isLoggedIn }) {
    if (isLoggedIn) {
      console.log(isLoggedIn);
  return (
    <>
      <Switch>

        <RouteWithLayout
          component={ProgramsPage}
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
        <RouteWithLayout
          component={SupportTypesPage}
          exact
          layout={MainLayout}
          path="/supportType"
        />
        <RouteWithLayout
          component={SettingPage}
          exact
          layout={MainLayout}
          path="/settings"
        />
       

        <Redirect to="/program" />
      </Switch>
    </>
  );
}  else {

    return (
      <Switch>
        <RouteWithLayout
          component={Login}
          exact
          layout={LoginLayout}
          path="/login"
        />
       
        <Redirect to="/login" />
      </Switch>
    );
  }
}
export default Routes;

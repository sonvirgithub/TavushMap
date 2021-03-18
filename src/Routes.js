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
import SideBar from "./components/layout/SideBar/SideBar";
import MoreInfo from "./components/HomePage/MoreInfo";

function Routes({
  programId,
  setProgramId,
  isLoggedIn,
  showResults,
  setShowResults,
  // programsList,
  successPage,
  setSuccessPage,
  setFailPage,
}) {
  // console.log(showResults, "showResults rout");
  if (!isLoggedIn) {
    // console.log(isLoggedIn);
    return (
      <>
        {/* <SideBar /> */}
        {showResults ? (
          <MoreInfo
            setShowResults={setShowResults}
            programId={programId}
            // programsList={programsList}
          />
        ) : (
            <SideBar />
          )}
        <Switch>
          {/* <RouteWithLayout
            component={ProgramsPage}
            render={() => <ProgramsPage showResults={showResults} />}
            exact
            showResults={showResults}
            setShowResults={setShowResults}
            layout={MainLayout}
            path="/program"
          /> */}
          <Route
            exact
            path="/program"
            render={() => (
              <ProgramsPage
                setProgramId={setProgramId}
                showResults={showResults}
                setShowResults={setShowResults}
              />
            )}
          />
          <Route
            exact
            path="/organization"
            render={() => (
              <OrganizationsPage
                setSuccessPage={setSuccessPage}
                successPage={successPage}
                setFailPage={setFailPage}
              />
            )}
          />
          <Route
            exact
            path="/category"
            render={() => (
              <CategoriesPage
                setSuccessPage={setSuccessPage}
                successPage={successPage}
                setFailPage={setFailPage}
              />
            )}
          />
          <Route
            exact
            path="/supportType"
            render={() => (
              <SupportTypesPage
                setSuccessPage={setSuccessPage}
                setFailPage={setFailPage}
              />
            )}
          />
          <Route
            exact
            path="/settings"
            render={() => (
              <SettingPage
                setSuccessPage={setSuccessPage}
                setFailPage={setFailPage}
              />
            )}
          />
          {/* <RouteWithLayout
            component={OrganizationsPage}
            exact
            layout={MainLayout}
            path="/organization"
          /> */}
          {/* <RouteWithLayout
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
          /> */}

          <Redirect to="/program" />
        </Switch>
      </>
    );
  } else {


    return (
      <Switch>
        <Route exact path="/login" render={() => <Login />} />
        {/* <RouteWithLayout
          component={Login}
          exact
          layout={LoginLayout}
          path="/login"
        /> */}

        <Redirect to="/login" />
      </Switch>
    );
  }
}
export default Routes;

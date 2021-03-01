import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/layout/SideBar/SideBar";
import Routes from "./Routes";

function App() {
  return (
    <>
      <Sidebar />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;

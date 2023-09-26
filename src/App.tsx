import React from "react";
import "./App.css";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import Dashboard from "./components/dashboard";
import Registration from "./components/registration/Registration";
import Routes from "./routes/Routes";

function App() {
  return (
    <React.Fragment>
      <Routes />
    </React.Fragment>
  );
}

export default App;

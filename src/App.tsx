import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./components/dashboard/Dashboard";
import Registration from "./components/registration/Registration";

function App() {
  return <React.Fragment>
    <Registration/>
  </React.Fragment>;
}

export default App;

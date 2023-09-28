import React from "react";
import "./App.css";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import Dashboard from "./components/dashboard";
import Registration from "./components/registration/Registration";
import Routes from "./routes/Routes";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Routes /> */}
    </React.Fragment>
  );
}

export default App;

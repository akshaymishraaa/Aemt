import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import { useLocation } from "react-router";
import Root from "./routes/Routes";
import { Actiontypes } from "./types/ActionTypes";
import { useDispatch } from "react-redux";


function App() {
  const location = useLocation();
  return (
    <React.Fragment>
      <div className="container-fluid p-0">
        <React.Suspense fallback={<div>Loading....</div>}>
          
          <Navbar />
        </React.Suspense>
      </div>
    </React.Fragment>
  );
}

export default App;

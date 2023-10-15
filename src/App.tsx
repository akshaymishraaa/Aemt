import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import { useLocation } from "react-router";
import Root from "./routes/Routes";


function App() {
  const location = useLocation()
  console.log(location, "9...")
  return (
    <React.Fragment>
      <div className="container-fluid p-0">
        <React.Suspense fallback={<div>Loading....</div>}>
          <Navbar/>
        </React.Suspense>
      </div>
    </React.Fragment>
  );
}

export default App;

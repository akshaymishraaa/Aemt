import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";


function App() {
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

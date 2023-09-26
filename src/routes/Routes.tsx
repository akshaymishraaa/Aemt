import React from "react";
import {  Route , Routes as Routing, useRoutes} from "react-router-dom";
import Registration from "../components/registration/Registration";
import routes from "../components/loadable/Dynamicroutes";
import Login from "../components/login/Login";
import Dashboard from "../components/dashboard/Dashboard";
function Routes() {
  const content = useRoutes(routes);
  return (
    <React.Fragment>
      <>
      {console.log('10....',content,routes)}
      </>
    <Routing>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Registration />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routing>  
    </React.Fragment>
  );
}

export default Routes;

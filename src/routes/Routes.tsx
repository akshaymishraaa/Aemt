import React from "react";
import {  Route , Routes as Routing} from "react-router-dom";
import Registration from "../components/registration/Registration";
function Routes() {
  return (
    <Routing>
      <Route path="/" element={<Registration />} />
    </Routing>
  );
}

export default Routes;

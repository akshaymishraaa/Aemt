import React, { Suspense } from "react";
import {
  Route,
  Routes as Routing,
  useRoutes,
  BrowserRouter,
} from "react-router-dom";
import Registration from "../components/registration/Registration";
import routes from "../components/loadable/Dynamicroutes";
import Login from "../components/login/Login";
import LoadingScreen from "../components/loadable/LoadingScreen";
import PublicRoute from "./PublicRoute";
import { useSelector } from "react-redux";
import dynamicRoutes from "../components/loadable/Dynamicroutes";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../components/dashboard";
function Routes() {
  const { isAuthenticated } = useSelector((state: any) => state.application);
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routing>
          <Route
            path="/"
            element={
              <PublicRoute to="/home">
                <Login />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/registration"  
            element={
              <PublicRoute to="/register">
                <Registration />
              </PublicRoute>
            }
          ></Route>
          <Route path="/dashboard" element={
            <PrivateRoute isAuthenticated={isAuthenticated} to="/">
              <Dashboard />
            </PrivateRoute>
          }>

          </Route>
          {/* <>
            {dynamicRoutes?.map((item: any, index: number) => {
              return (
                <Route
                  key={index}
                  path={item.pathName}
                  element={
                    <PrivateRoute isAuthenticated={isAuthenticated} to="/">
                      {item?.children && item?.renderChild ? (
                        item?.children?.map((child: any, childIndex: any) => {
                          return (
                            item.renderChild && (
                              <Routing key={childIndex}>
                                <Route
                                  path={child.pathName}
                                  element={<child.component />}
                                ></Route>
                              </Routing>
                            )
                          );
                        })
                      ) : (
                        <item.Component />
                      )}
                    </PrivateRoute>
                  }
                ></Route>
              );
            })}
          </> */}

        </Routing>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;

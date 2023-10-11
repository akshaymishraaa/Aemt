import React, { Suspense } from "react";
import {
  Route,
  Routes as Routing,
} from "react-router-dom";
import Registration from "../components/registration/Registration";
import Login from "../components/login/Login";
import LoadingScreen from "../components/loadable/LoadingScreen";
import PublicRoute from "./PublicRoute";
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoute";
// import Dashboard from "../components/dashboard";
import { privateRoutes } from "../constants/lazyRoutes";
function Root() {
  const { isAuthenticated } = useSelector((state: any) => state.application);
  return (
    // <BrowserRouter>
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
          <>
            {privateRoutes?.map((item: any, index: number) => {
              return (
                <Route
                  key={index}
                  path={item.pathName}
                  element={
                    <PrivateRoute isAuthenticated={isAuthenticated} to="/" >
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
                        <item.component />
                      )}
                    </PrivateRoute>
                  }
                ></Route>
              );
            })}
          </>

        </Routing>
      </Suspense>
    // </BrowserRouter>
  );
}

export default Root;

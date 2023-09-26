import type { RouteObject } from "react-router";

// import { Loadable } from './Loadable';
// import {lazy} from "react";
// import MainLayout from './MainLayout';
import React, { Suspense, lazy } from "react";
import LoadingScreen from "./LoadingScreen";
import MainLayout from "./MainLayout";
import AuthGuard from "./AuthGuard";
import GuestGuard from "./GuestGuard";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
(
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

const Login = Loadable(lazy(() => import("../login/Login")));
const Register = Loadable(lazy(() => import("../registration/Registration")));

//  * HOME PAGE
// const Home = Loadable(lazy(() => import("../dashboard/Dashboard")));

const dynamicRoutes = [
  {
    name: 'Home',
    pathName: '/home',
    component: lazy(() => import("../dashboard/Dashboard")),
    navigateTo: '/home'
  },
  // {
  //   name:'Roles',
  //   pathName:'*',
  //   component: lazy(() => import("../dashboard/Dashboard")),
  //   navigateTo:'/roles',
  //   showChild: true,
  //   renderChild:true,
  //   children:[{
  //     name:'',
  //     pathName:'/',
  //     component:lazy(() => import("../dashboard/Dashboard"))
  //   }]
  // }
];

export default dynamicRoutes;

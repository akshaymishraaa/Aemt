import { Loadable } from './Loadable';
import {lazy} from "react";

const Login = Loadable(lazy(() => import('../login/Login')));
const Register = Loadable(
  lazy(() => import('../registration/Registration'))
);

//  * HOME PAGE
// const Home = Loadable(lazy(() => import('../dashboard/Dashboard')));
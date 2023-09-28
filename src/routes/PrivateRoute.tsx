import React from "react";
import { useLocation, Navigate } from "react-router-dom";

interface Props {
  children?: React.ReactElement;
  isAuthenticated?: boolean;
  to?: string;
}

export default function PrivateRoute(props: Props):any {
  const { children, isAuthenticated, to = "/" } = props;
  const { pathname } = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate state={{ redirect: pathname, isAuthenticated }} to={to} />
  );
}
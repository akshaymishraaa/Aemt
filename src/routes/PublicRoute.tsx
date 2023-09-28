import React from "react";
import { useLocation, Navigate } from "react-router-dom";

interface Props {
  children?: any;
  isAuthenticated?: boolean;
  to?: string;
}

export default function PublicRoute(props: Props):JSX.Element {
  const { children, isAuthenticated, to = "/" } = props;
  // const { state } = useLocation();
  // console.log("13...",state ,(state as any)?.redirect || to, to)
  return isAuthenticated ? (
    // <Navigate to={(state as any)?.redirect || to} />
    <Navigate to={to} />
  ) : (
    children
  );
}

import React,{Suspense,lazy} from "react";
import LoadingScreen from "./LoadingScreen";

export const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
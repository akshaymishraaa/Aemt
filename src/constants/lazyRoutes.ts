import { lazy } from "react";

export const privateRoutes = [
  {
    name: "Home",
    pathName: "/home",
    component: lazy(() => import("../components/dashboard/index")),
    navigateTo: "home",
  },
  //Note:------Just a example for how to write routes who have childrens change according tp your needs
  {
    name: "Subjects",
    pathName: "/subjects/*",
    component: lazy(() => import("../components/management/Management")),
    navigateTo: "/subjects",
    showChild: true,
    renderChild: true,
    children: [
      {
        name: "Subject List",
        pathName: "/",
        component: lazy(() => import("../components/management/Management")),
        navigateTo: "subjects",
      },
      {
        name: "Import Data",
        pathName: "importData",
        component: lazy(() => import("../components/librarymanagement/LibraryManagement")),
        navigateTo: "subjects/importdata",
      },
    ],
  },
];

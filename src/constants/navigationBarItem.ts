import { lazy } from "react";

export const navigationItem = [
  {
    name: "Home",
    pathName: "/home",
    component: lazy(() => import("../components/dashboard/index")),
    navigateTo: "/home",
    icon: lazy(() => import("@mui/icons-material/Dashboard"))
  },
  {
    name: "User management",
    pathName: "/userManagement",
    component: lazy(() => import("../components/roles/index")),
    navigateTo: "/userManagement",
    icon: lazy(() => import("@mui/icons-material/ManageAccounts"))
  },
  {
    name: "Settings",
    pathName: "/settings",
    component: lazy(() => import("../components/settings/AppSetting")),
    navigateTo: "/settings",
    icon: lazy(() => import("@mui/icons-material/Tune"))
  },
  {
    name: "User profile",
    pathName: "/userProfile",
    component: lazy(() => import("../components/profile/UserProfile")),
    navigateTo: "/userProfile",
    icon: lazy(() => import("@mui/icons-material/AccountCircle"))
  },
  {
    name: "Audit logs",
    pathName: "/auditLogs",
    component: lazy(() => import("../components/auditLogs/AuditLogs")),
    navigateTo: "/auditLogs",
    icon: lazy(() => import("@mui/icons-material/MenuBook"))
  },
];

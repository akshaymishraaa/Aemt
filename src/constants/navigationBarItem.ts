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
  {
    name: "Students",
    pathName: "/students",
    component: lazy(() => import("../components/students/Students")),
    navigateTo: "/students",
    icon: lazy(() => import("@mui/icons-material/Groups2"))
  },
  {
    name: "Employee",
    pathName: "/employees",
    component: lazy(() => import("../components/employess/index")),
    navigateTo: "/employees",
    icon: lazy(() => import("@mui/icons-material/EventNote"))
  },
  
  {
    name: "Examination",
    pathName: "/examination/*",
    component: lazy(() => import("../components/examination/index")),
    navigateTo: "/examination",
    icon: lazy(() => import("@mui/icons-material/NoteAlt")),
    renderChild: true,  
  },
  {
    name: "Management",
    pathName: "/managements",
    component: lazy(() => import("../components/managements/Managements")),
    navigateTo: "/managements",
    icon: lazy(() => import("@mui/icons-material/ManageHistory"))
  },
];

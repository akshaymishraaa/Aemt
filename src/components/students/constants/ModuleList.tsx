import { lazy } from "react";

export const ModuleList = [
    {
        name: "Student Details",
        value: "Details",
        component: lazy(() => import('../components/StudentDetails'))
    },
    {
        name: "Certificates",
        value: "certificates",
        component: lazy(() => import('../components/certifications/CertificationIndex'))
    },
    {
        name: "Stationary",
        value: "stationary",
        component: lazy(() => import('../components/stationary/StationaryDetails'))
    },
    {
        name: "Pending Fees",
        value: "feeDetails",
        component: lazy(() => import('../components/pendingFee/PendingFeeIndex'))
    },
    // { name: "others", value: "others" }

]
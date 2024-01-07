import { lazy } from "react";

export const MenuAction = [
    {
        name: "Generate Certifications",
        icon: lazy(() => import('@mui/icons-material/ReceiptLong')),
        actionType:'generateCertifications'
    },
    {
        actionType: 'cetificateList',
        icon: lazy(() => import('@mui/icons-material/ListAlt')),
        name:"Issued CetificateList"
    },
    {
        name: "Student Fee Details",
        icon: lazy(() => import('@mui/icons-material/DynamicFeed')),
        actionType:"feeRecord"

    }
]
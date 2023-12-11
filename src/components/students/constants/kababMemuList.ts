import { lazy } from "react";

export const MenuAction = [
    {
        name: "generateCertifications",
        element: lazy(() => import('../components/certifications/CertificationIndex'))
    },
    {
        name: 'cetificateList',
        element: lazy(() => import('../components/listOfReceivedCertificates/RecivedCertifications'))
    },
    {
        name: "studentFeeDetails",
        element: lazy(() => import('../components/studentFeeRecord/StudentFeeRecordDetails'))

    }
]
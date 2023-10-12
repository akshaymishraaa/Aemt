import React from 'react'
import Dashboard from '../components/dashboard'
import Management from '../components/management/Management'
import AppSetting from '../components/settings/AppSetting'
import UserProfile from '../components/profile/UserProfile'
import AuditLogs from '../components/auditLogs/AuditLogs'

function Root() {
    return (
        <div>
            <Dashboard />
            <Management />
            <AppSetting />
            <UserProfile />
            <AuditLogs />
        </div>
    )
}

export default Root
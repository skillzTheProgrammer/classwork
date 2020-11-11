import React from 'react'
import Sidemenu from './sidemenu/Sidemenu'
import UserUpdatesComponent from './updates/userupdates/userupdates'
import { DashboardContainer } from './style'

export default function Dashboard() {
    return (
        <DashboardContainer>
            <Sidemenu />
            <UserUpdatesComponent />
        </DashboardContainer>
    )
}

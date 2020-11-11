import React from 'react'
import  {DashboardContainer}  from './style'
import SideMenu from '../dashboard/sidemenu/Sidemenu'
import KickStart from '../kickstart/kstart'
import UserUpdatesComponent from './updates/userupdates/userupdates'


export default function Dashboard() {
    return (
        <DashboardContainer>
            <SideMenu/>
            <KickStart/>
            <UserUpdatesComponent />
        </DashboardContainer>
    )
}



import React from 'react'
import  {DashboardContainer}  from './style'
import SideMenu from '../dashboard/sidemenu/Sidemenu'
import KickStart from '../kickstart/kstart'







export default function Dashboard() {
    return (
        <DashboardContainer>
            <SideMenu/>
            <KickStart/>
        </DashboardContainer>
    )
}



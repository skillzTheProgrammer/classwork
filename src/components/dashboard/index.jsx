import React from 'react'
import CenterDisplay from './centerdisplay'
import { Right } from './centerdisplay/rightcenter/style'
import RightSideMenu from './RightSideMenu'
import Sidemenu from './sidemenu/Sidemenu'
import { DashboardContainer } from './style'

export default function Dashboard() {
    return (
        <DashboardContainer>
            <Sidemenu />
            <CenterDisplay />
            <RightSideMenu />
        </DashboardContainer>
    )
}

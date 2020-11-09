import React from 'react'
import Sidemenu from './sidemenu/Sidemenu'
import { DashboardContainer } from './style'

export default function Dashboard() {
    return (
        <DashboardContainer>
            <Sidemenu />
        </DashboardContainer>
    )
}

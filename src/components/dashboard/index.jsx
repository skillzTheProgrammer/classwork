import React from 'react'
import Leftside from './leftside/Leftside'
import Sidemenu from './sidemenu/Sidemenu'
import { DashboardContainer } from './style'

export default function Dashboard() {
    return (
        <DashboardContainer>
            <Sidemenu />
            <Leftside />
        </DashboardContainer>
        
        
    )
}

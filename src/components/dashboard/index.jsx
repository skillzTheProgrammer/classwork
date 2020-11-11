import React from 'react'
import Sidemenu from './sidemenu/Sidemenu'
import MiddleSection from '../middlesection/main'
import { DashboardContainer } from './style'


export default function Dashboard() {
    return (
        <DashboardContainer>
            <Sidemenu />
            <MiddleSection />
        </DashboardContainer>
    )
}

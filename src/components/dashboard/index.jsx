import React from 'react'
import Calender from '../calender/Calender'
import Sidemenu from './sidemenu/Sidemenu'
import { DashboardContainer } from './style'

export default function Dashboard() {
    return (
        <DashboardContainer>
            <Sidemenu />
            <Calender />
        </DashboardContainer>
    )
}

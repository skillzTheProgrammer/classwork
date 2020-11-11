import React from 'react'
// import Sidemenu from './sidemenu/Sidemenu'
import {KickstartContainer, kickstartContent} from './style'

export default function KickStart() {
    return (
        <KickstartContainer>
            <kickstartContent>
                <h4>Kickstart preparations to choose</h4><br/><h4 id="h4b">a career path</h4>
                <button><span id='buttonlabel'>Get started</span></button>
            </kickstartContent>
        </KickstartContainer>

    )
}


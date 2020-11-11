import React from 'react'
import { ImageHeader, MenuContent, MenuDiv, ProfileContainer, ProfileDescription, SidemenuContainer } from './style'
import {MenuData} from './menuContent'
import dashboard from '../../../assets/icons/dashboard.svg'

export default function Sidemenu() {
    return (
        <SidemenuContainer>
            <ProfileContainer>
                <ImageHeader>
                    <img /> 
                    <div>
                        <h3>Folawemi Faks</h3>
                        <p>000123443</p>
                    </div>
                </ImageHeader>
                <ProfileDescription>
                    <div>
                        <p>chrt</p>
                        <h3>4</h3>
                    </div>
                    <div>
                        <p>Year</p>
                        <h3>2020</h3>
                    </div>
                </ProfileDescription>
            </ProfileContainer>
            <MenuDiv>
                <MenuContent >
                    {
                        MenuData.map(menu=>{
                            return(
                            <div className={menu.isActive?"active":null}>
                                
                                <h3 style={menu.isActive===false?{color:'white'}:null}>
                                <img src={menu.icon} alt="icon" />
                                    {menu.name}
                                    </h3>
                            </div>  
                            )
                        })
                    } 
                </MenuContent>
            </MenuDiv>
        </SidemenuContainer>
    )
}

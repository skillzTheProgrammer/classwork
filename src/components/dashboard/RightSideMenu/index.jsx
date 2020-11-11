import React from 'react'
import { FirstDiv, OuterDiv, UpdateDiv,PerUpdate,ImageContainer,UpdateText, Per, LowerDiv, UpperDiv, LineOne, DownDiv, LineTwo} from './style'
import {InnerJavaScript, LastPartDiv} from '../centerdisplay/styled'
import Alicho from '../../../assets/images/alicho.jpeg'


export default function RightSideMenu() {
    return (
        <OuterDiv>
            <FirstDiv>
                <UpdateDiv>
                    <h3>Updates</h3>
                    <button>12</button>
                </UpdateDiv>
                <PerUpdate>
                    <Per>
                        <ImageContainer>
                            <img src={Alicho} alt=""/>
                        </ImageContainer>
                        <UpdateText>
                            <p><span>Sani Rapheal</span> updated an event in the timetable</p>
                        </UpdateText>
                    </Per>

                    <Per>
                        <ImageContainer>
                            <img src={Alicho} alt=""/>
                        </ImageContainer>
                        <UpdateText>
                            <p><span>Akaiso Benson</span> added a material to course JavaScript</p>
                        </UpdateText>
                    </Per>

                    <Per>
                        <ImageContainer>
                            <img src={Alicho} alt=""/>
                        </ImageContainer>
                        <UpdateText>
                            <p><span>Anyebe Tony</span> has been voted in as the official guest speaker</p>
                        </UpdateText>
                    </Per>
                        
                    <button>Show All Updates</button>
                </PerUpdate>
            </FirstDiv>

            <UpdateDiv>
                <h3>Assignments</h3>
                <button>2</button>
            </UpdateDiv>

               <LowerDiv>
                    <UpperDiv>
                        <LineOne>
                            <p>JavaScript-UseEffect</p>
                            <button>This Week</button>
                        </LineOne>
                        <p className='lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div>
                            <img src={Alicho} alt=""/>
                            <p><strong>Elliot</strong></p>
                        </div>
                    </UpperDiv>
                    <br />

                    <DownDiv>
                        <LineTwo>
                            <p>Django-Ecommerce</p>
                            <button>Last Week</button>
                        </LineTwo>
                        <p className='lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div>
                            <img src={Alicho} alt=""/>
                            <p><strong>Yinka</strong></p>
                        </div>
                    </DownDiv>
               </LowerDiv>
               <br />
               <button className='button'>Go to Assignments</button>

            
        </OuterDiv>
    )
}

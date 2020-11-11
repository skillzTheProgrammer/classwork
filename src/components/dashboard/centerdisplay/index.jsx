import React from 'react'
import RightSide from './rightcenter'
import { MainDiv, TopDiv, BottomDiv,OverAllNovember, JavaScriptDiv,SpringDiv,RightDiv,Date,InnerJavaScript,LastPartDiv,InnerSpring } from './styled'
import Alicho from '../../../assets/images/alicho.jpeg'

export default function CenterDisplay() {
    return (
        <MainDiv >
            <TopDiv>
                <h3>Kickstart a preparations to choose <br />a career path </h3>
                <button>Get Started</button>
            </TopDiv>
            <BottomDiv>
                <OverAllNovember>
                    <Date>

                    </Date>
                    <h5>Classes</h5>
                    <JavaScriptDiv>
                        
                        <InnerJavaScript>
                            <button>ongiong</button>
                            <h3>JavaScript</h3>
                            <h5>Introduction to custom hooks</h5>
                            <p>9:00am to 5:00pm</p>
                            <LastPartDiv>
                                <img src={Alicho} alt=""/>
                                <h5>Elliot</h5>
                            </LastPartDiv>
                        </InnerJavaScript>

                    </JavaScriptDiv>

                  


                    <SpringDiv>
                        <h1></h1>
                        <InnerSpring>
                                <button>Next</button>
                                <h3>Spring</h3>
                                <h5>Introduction to Spring</h5>
                                <p>9:00am to 5:00pm</p>
                                <LastPartDiv>
                                    <img src={Alicho} alt=""/>
                                    <h5>Tobi</h5>
                                 </LastPartDiv>
                        </InnerSpring>

                    </SpringDiv>
                </OverAllNovember>
                
                {/* rightside div/ */}
                <RightDiv>
                    <RightSide />
                </RightDiv>
            </BottomDiv>
            
        </MainDiv >
    )
}

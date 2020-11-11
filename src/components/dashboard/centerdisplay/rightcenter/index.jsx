import React from 'react'
import Student from '../../../../contexts/User'
import {Right, MessageDiv, ResearchDiv, MessageText, StudentImageDiv, StudentNameDiv, GeneralStudentDiv, Text, MainNoteDiv, DownContainer,StudentContainer} from './style'
import Alicho from '../../../../assets/images/alicho.jpeg'

export default function RightSide() {
    return (
        <Right>
            <MessageDiv>
                <MessageText>
                    <h3>Message</h3>
                    <button>+ New Message</button>
                </MessageText>
                <GeneralStudentDiv>

                    <StudentImageDiv>
                        <img src={Alicho} alt=""/>

                    </StudentImageDiv>
                    <StudentContainer>
                        <StudentNameDiv>
                            <h5>Mr. Faks</h5>
                            <p>3 minutes ago</p>
                        </StudentNameDiv>
                        <Text>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <hr />
                        </Text>  
                    </StudentContainer>
                </GeneralStudentDiv>

                <GeneralStudentDiv>

                    <StudentImageDiv>
                        <img src={Alicho} alt=""/>

                    </StudentImageDiv>
                    <StudentContainer>
                        <StudentNameDiv>
                            <h5>Zipya Deborah</h5>
                            <p>3 minutes ago</p>
                        </StudentNameDiv>
                        <Text>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button>2 Attachments</button> 
                        <hr />
                        </Text>  
                        
                    </StudentContainer>
                </GeneralStudentDiv>

         


            </MessageDiv>
            <DownContainer>
                <MainNoteDiv>
                    <h3>Notes</h3>
                    <button>+ New Note</button>
                </MainNoteDiv>
                <ResearchDiv>
                    <h4>Research</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </ResearchDiv>
            </DownContainer>
        </Right>
    )
}

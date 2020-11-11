import React from 'react'
import { GeneralContainer, DividedSection, LowerSection, SecondDividedSection, UpperSection, InnerDiv, SectionText, OuterDiv, SecondOuterDiv, NoteButton, NoteText } from './style'
import Course from './dividedSection'


function MiddleSection({props}) {

    return (
        <GeneralContainer>

            <LowerSection>

                <DividedSection>
                
                    <SectionText>Classes</SectionText>
                    <InnerDiv color={`#e5f8ed`} border={`#2dc76d`} >
                        <Course name='Elliot' course="JavaScript" text="Introduction to custom hooks" status ="Ongoing" session ={`#2dc76d`} />
                    </InnerDiv>
                    
                    <InnerDiv color={`#f7f7f7`} border={`#b9b9b9`} >
                        <Course name='Tobi' course="Spring" text="Introduction to spring" status ="Next" session={`#b9b9b9`} />
                    </InnerDiv>

                </DividedSection>

                {/* <SecondDividedSection>
                    <OuterDiv>
                        
                    </OuterDiv>
                    <SecondOuterDiv>
                       
                    </SecondOuterDiv>

                </SecondDividedSection> */}

            </LowerSection>

        </GeneralContainer>
    )
}

export default MiddleSection

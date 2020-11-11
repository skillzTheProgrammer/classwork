import React from 'react'
import { GeneralContainer, DividedSection, LowerSection, SecondDividedSection, UpperSection, InnerDiv, SectionText, OuterDiv, SecondOuterDiv, NoteButton, NoteText } from './style'
import Notepad from '../note/notepad'


function MiddleSection({props}) {

    return (
        <GeneralContainer>
            
            <UpperSection>
                
            </UpperSection>

            <LowerSection>

                <DividedSection>

                </DividedSection>

                <SecondDividedSection>
                    <OuterDiv>

                    </OuterDiv>
                    <SecondOuterDiv>
                       <Notepad /> 
                    </SecondOuterDiv>

                </SecondDividedSection>

            </LowerSection>

        </GeneralContainer>
    )
}

export default MiddleSection

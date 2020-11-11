import React from 'react'
import { GeneralContainer, LowerSection, SecondDividedSection, InnerDiv, SectionText, SecondOuterDiv, NoteButton, NoteText } from './style'
import Notepad from '../note/notepad'


function MiddleSection({ props }) {

    return ( <
        GeneralContainer >

        <
        LowerSection >

        <
        SecondDividedSection >

        <
        SecondOuterDiv >
        <
        Notepad / >
        <
        /SecondOuterDiv>

        <
        /SecondDividedSection>

        <
        /LowerSection>

        <
        /GeneralContainer>
    )
}

export default MiddleSection
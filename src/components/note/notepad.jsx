import React from 'react'
import { ChatDiv, GeneralDiv, HoldingDiv } from './style'

function Notepad() {
    return (
        <GeneralDiv>
            <HoldingDiv>
                <h3>Notes</h3>
                <button>+ add notes</button>
            </HoldingDiv>
            <ChatDiv>
                <h3>Research</h3>
                <div>
                    <p>lopresum lapresum lolo lopoplolo lapradum sumsum lala!!! Indaboski ponmo lolo lala presum!!!</p>
                </div>
            </ChatDiv>
        </GeneralDiv>
    )
}

export default Notepad

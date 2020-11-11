import React from 'react'
import { AssignmentDiv, FirstBox, Header, ImageDiv, LeftContainer, SecondBox } from './style'

export default function Leftside(){
    return(
        <LeftContainer>
            <AssignmentDiv>
                <Header>
                    <p>Assignments</p>
                    <h5>2</h5>
                </Header>
                <FirstBox>
                   <div>
                       <h5>JavaScript - useEffect</h5>
                       <h6>This Week</h6>
                   </div>
                   <p>Nemo enim ipsam voluptatem quia voluptas
                        aspernatur aut odit aut fugit, sed quia.</p>

                    <ImageDiv>
                        <img />
                        <h3>Elliot</h3>
                    </ImageDiv>
                </FirstBox>

                <SecondBox>
                    <div>
                       <h5>Django - Ecommerce</h5>
                       <h6>Last Week</h6>
                   </div>
                   <p>Nemo enim ipsam voluptatem quia voluptas
                        aspernatur aut odit aut fugit, sed quia.</p>

                    <ImageDiv>
                        <img />
                        <h3>Yinka</h3>
                    </ImageDiv>
                </SecondBox>

            </AssignmentDiv>
        </LeftContainer>
    )
}
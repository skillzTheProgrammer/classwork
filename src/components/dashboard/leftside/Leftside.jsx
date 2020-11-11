import React from 'react'
import { AssignmentDiv, FirstBox, Header, ImageDiv, LeftContainer, SecondBox } from './style'
import colorGenerator from './colorgenerator'

export default function Leftside(){
    return(
        <LeftContainer>
            <AssignmentDiv>
                <Header>
                    <p>Assignments</p>
                    <h5>2</h5>
                </Header>
                <FirstBox style={{backgroundColor:colorGenerator()}}>
                   <div>
                       <h5>JavaScript - useEffect</h5>
                       <h6 style={{color:colorGenerator(), backgroundColor:colorGenerator()}}>This Week</h6>
                   </div>
                   <p>Nemo enim ipsam voluptatem quia voluptas
                        aspernatur aut odit aut fugit, sed quia.</p>

                    <ImageDiv>
                        <img />
                        <h3>Elliot</h3>
                    </ImageDiv>
                </FirstBox>

                <SecondBox style={{backgroundColor:colorGenerator()}}>
                    <div>
                       <h5>Django - Ecommerce</h5>
                       <h6 style={{color:colorGenerator(), backgroundColor:colorGenerator()}}>Last Week</h6>
                   </div>
                   <p>Nemo enim ipsam voluptatem quia voluptas
                        aspernatur aut odit aut fugit, sed quia.</p>

                    <ImageDiv>
                        <img />
                        <h3>Yinka</h3>
                    </ImageDiv>
                </SecondBox>
                <button type='button'><h6> Go To Assignment</h6></button>
            </AssignmentDiv>
        </LeftContainer>
    )
}
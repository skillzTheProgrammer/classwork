import React from 'react'
import {UpdateContainer, UpdateHeader,Counter, UserNameDiv, ButtonDiv} from './style'
import dataObj from './data'
import colorGenerator from '../utils/colorgenerator'

export default function UserUpdatesComponent(){
    return(
        <UpdateContainer>
              <UpdateHeader>
                    Updates<Counter><p>12</p></Counter>
              </UpdateHeader>
            {
                dataObj.map((user)=>{
                    return(
                       <div key={user.id}>
                            <UserNameDiv>
                                <img style={{backgroundColor:user.imgcolor}}/>
                                <div className="pTagDiv">
                                    <p className="messageP">
                                        <span className="userNameP" style={{color:colorGenerator()}}>{user.username}</span>
                                        {user.updatesNotes}
                                    </p>
                                </div>
                                
                            </UserNameDiv>
                        </div>
                    )
                })
            }

            <ButtonDiv>
                 <button className="btn">Show All Updates</button>
            </ButtonDiv>
                        
        </UpdateContainer>
       
    )
}
import styled from 'styled-components'

export const UpdateContainer = styled.div`
margin: 6px 5px 15px 5px;
padding: 15px 5px 15px 5px;
border-radius: 10px;
background-color: #fff;
width: 300px;
height: 300px;
`

export const UpdateHeader = styled.h4`
display: flex;
flex-direction: row;
font-size: 17px;
font-weight: bold;
color: #222C67;
`

export const Counter = styled.div`
height: 15px;
width: 15px;
font-size: 11px;
background-color: #2DC76D;
margin-left: 10px;
padding: 1px 5px;
color: #fff;
border-radius: 10px;
`

export const UserNameDiv = styled.div`
margin-top: 15px;
display: flex;
display-direction: row;
padding-bottom: 10px;
    img{
        height: 40px;
        width: 40px;
        border-radius: 20px;
        margin-right: 10px;
    }

    .pTagDiv{
        width: 250px;
        margin-left: 5px;
    }

    .userNameP{
        font-size: 13px;
        padding: 4px 5px 0 0;
    }

    .messageP{
        font-size: 10px;
        padding-top: 7px;
        color: #222C67;
    }

`

export const ButtonDiv = styled.div`
display: flex;
justify-content: center;
padding-top: 15px;
    button{
        background-color: #fff;
        border: 1px solid #FEA110;
        border-radius: 25px;
        font-size: 10px;
        padding: 10px ;
        width: 50%;
        color: black;
        cursor: pointer;
    }
    btn:hover{
        border: 1px solid #FEA110;
    }

`
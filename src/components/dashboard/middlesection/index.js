import styled from 'styled-components'

export const GeneralDiv = styled.div`
    background-color: light-green;
    display: flex;
    border: none;
    height: 100%;
    margin-left: 0rem;
    margin-right: 0.7rem;
    border-radius: 1rem;
    flex-direction: column;
    padding-left: 0.5rem;

`
export const DisplayButton = styled.button`
    width: 4rem;
    height: 1.5rem;
    border-radius: 4rem;
    border: none;
    margin-top: 0.3rem;
    font-size: 10px;

    :focus{
        outline: none;
    }

    
    ${({session}) => session &&
    `color: ${session}`
    } 
`

export const Displaytext = styled.h3`
    margin-top: 0.5rem;

`
export const SmallText = styled.p`
    font-size: 12px;
    margin-top: 0.7rem;
    font-weight: bold;

`
export const Time = styled.p`
    margin-top: 0.7rem;
    font-weight: light;
    font-size: 8px;
    color: gray;

`
export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 0.7rem;
    

    div{
        background-color: grey;
        width:  1rem;
        height: 1rem;
        border-radius: 4rem;
        margin-right: 0.5rem;
    }

    p{
        font-size: 8px;
        text-align: center;
        font-weight: bolder;
        position: relative;
        top: 0.2rem;
    }
`
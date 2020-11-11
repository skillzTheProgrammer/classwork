import styled from 'styled-components'

export const GeneralDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

`
export const HoldingDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 30%;

    button{
        border-radius: 2rem;
        width: 8rem;
        height: 2.5rem;
        margin-top: 0.5rem;
        color: #FEA110;
        border: 1px solid #FEA110;
    }

    h3{
        margin-top: 1rem;
        margin-left: 1rem;
        color: #222C67;
    }
`
export const ChatDiv = styled.div`
    
    background-color: #e5f8ed;
    width: 97%;
    height:60%;
    margin-top: 0.5rem;
    margin-left: 0.4rem;
    margin-right: 0.5rem;
    border-radius: 2rem;

    h3{
        margin-left: 1rem;
        justify-content: flex-start;
        margin-top: 1rem;
        color: #222C67;
        font-size: 15px; 
    }
        
        p{
            color: #222C67;
            margin-left: 1rem; 
            margin-top: 1rem;
            justify-content: flex-start;
            font-size: 12px;
        }

    

`

import styled from 'styled-components'

export const GeneralContainer = styled.div`
    background-color: #ECEBEB;
    width: 60%;
    height:100%;
    margin: 9px 0 9px 9px;
    border-radius: 2rem;

`
export const UpperSection = styled.div`
    height: 25%;
    background-color: white;
    border-radius: 2rem
`
export const LowerSection = styled.div`
    height: 75%;
    margin-top: 1rem;
    border-radius: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
`
export const DividedSection = styled.div`
    margin-right: 1rem;
    background-color: white;
    height: 70%;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
`
export const SecondDividedSection = styled.div`
    background-color: #ECEBEB;
    height: 100%;
    border-radius: 2rem;
`
export const InnerDiv = styled.div`
    width:97%;
    height: 38%;
    margin-top: 1rem;
    border-radius: 1rem;
    border: 1px solid #E5F8ED;
    margin-left: 0.3rem;
    
    
    ${({color, border}) => color &&
    `background-color: ${color};
    
    border: 2px solid ${border}`
    } 
`
export const SectionText = styled.p`
    display: flex;
    justify-content: flex-start;
    margin-left: 1rem;
    margin-top: 1rem;
    
`
export const OuterDiv = styled.div`
    height: 65%;
    width: 100%;
    // margin-bottom: 13rem;
    background-color: white;
    border-radius: 1rem;
`
export const SecondOuterDiv = styled.div`
    height: 35%;
    width: 100%;
    margin-top:1rem;
    border-radius: 1rem;
    background-color: white;
`

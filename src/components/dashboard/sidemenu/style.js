import styled from 'styled-components/macro'

export const SidemenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    height:100%;
    width: 220px;
    background-color: #222C67;
    margin: 5px 0 5px 5px;
`
export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    height:35%;
    padding-top: 40px;
    padding-left: 20px;

`
export const ImageHeader = styled.div`
    display: flex;
    color: white;
    width: 100%;
    height: 60px;
    align-items: center;
    margin-bottom: 15px;


    img{
        background-color: white;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        margin-right: 12px;
        opacity: .7;
    }

    h3{
        font-size: 12px;
    }
    p{
        font-size:12px;
        opacity: .7;
    }
`
export const ProfileDescription = styled.div`
    display: flex;
    color: white;
    div{
        margin-right: 35px;
        align-self: center;
    }
    p{
        font-size: 10px;
        font-weight: 300;
        opacity:.7;
        margin-bottom: 5px;
    }
    h3{
        font-size: 10px;
        font-weight: bold;
        text-align: center;
    }
`
export const MenuDiv = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    height:100%;
    overflow: hidden;
`

export const MenuContent = styled.div`
    display: flex;
    flex-direction: column;

    div{
        display: flex;
        padding: 10px 0 10px 40px;
    }

    h3{
        font-size: 14px;
        text-align: center;
    }

    img{
        
        margin-right: 10px;
    }

    .active{
        background-color: white;
        width: 100%;
    }
`
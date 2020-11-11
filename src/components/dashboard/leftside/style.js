import styled from 'styled-components'

export const LeftContainer = styled.div`
    background-color: #FFFFFF;
    height: 100%;
    width: 300px;
    margin: 5px 5px 5px 5px;
    border-radius: 7px;
`

export const AssignmentDiv = styled.div`
    display: flex;
    flex-direction: column;

    button{
        background-color: white;
        color: black;
        width: 150px;
        border: 2px solid yellow;
        padding: 10px 7px 10px 7px;
        border-radius: 50px;
        margin:10px 0px 0 75px;

        h6{
            margin:0 5px 0 5px;
        }
    }

`

export const Header = styled.div`
    display: flex;
    margin-left: 20px;
    p{
        color: #222C67;
        margin-right: 5px;
    }
    h5{
        background-color: #2DC76D;
        border-radius: 15px;
        border: 5px;
        // padding-left: 7px;
        // padding-right: 7px;
        padding: 3px 10px 3px 10px;
    }
`

export const FirstBox = styled.div`
    width: 290px;
    height: 140px;
    background-color: rgba(234, 79, 79, 0.1);
    margin: 20px 0 0 5px;
    border-radius: 10px;

    div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        h5{
            font-size: 11px;
            margin: 10px 0 0 7px;
        }
        h6{
            font-size: 8px;
            padding: 5px 12px 5px 12px;
            background-color: rgba(234, 79, 79, 0.2);
            color: rgba(234, 79, 79, 1);
            border-radius: 10px;
            margin: 7px 10px 0 0;
        }
    }
    p{
        margin-top: 40px;
        font-size: 12px;
        margin: 7px;
    }
`

export const ImageDiv = styled.div`
    img{
        background-color: rgba(34, 44, 103, 0.54);
        border-radius: 70px;
        width: 25px;
        height: 25px;
        margin:10px 0 0 12px;
        opacity: .7;
    }
    h3{
        margin:18px 215px 0 0;
        font-size: 10px;
    }
`

export const SecondBox = styled.div`
    width: 290px;
    height: 140px;
    background-color: rgba(78, 93, 236, 0.1);
    margin: 20px 0 0 5px;
    border-radius: 10px;

    div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        h5{
            font-size: 11px;
            margin: 10px 0 0 7px;
        }
        h6{
            font-size: 8px;
            padding: 5px 12px 5px 12px;
            background-color: rgba(78, 93, 236, 0.2);
            color: rgba(78, 93, 236, 1);
            border-radius: 10px;
            margin: 7px 10px 0 0;
        }
    }
    p{
        margin-top: 40px;
        font-size: 12px;
        margin: 7px;
    }
`

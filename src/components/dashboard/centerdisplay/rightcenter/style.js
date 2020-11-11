import styled from 'styled-components'

export const Right = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    /* width:50%; */
    margin: 5px 0 5px 5px;
    border-radius:10px;
`
export const MessageDiv = styled.div`
    display:flex;
    flex-direction:column;
    background-color:white;
    height: 280px;
    border-radius:10px;
    width:100%;
 

`
export const DownContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:white;
    height: 150px;
    border-radius:10px 10px 0 0;
    margin: 7px 0 0px 0px;

`
export const MessageText = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    margin: 15px 10px 5px 5px;
    h3{
    /* margin-bottom:20px; */
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    /* line-height: 21px; */
    color: #222C67;
    
    }
    button{
        background-color:red;
        width:150px;
        border-radius:10px;
        height:30px;
        background: #FFF0D9;
        border: 1px solid #FEA110;
        box-sizing: border-box;
        border-radius: 15px;

        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        /* line-height: 12px; */
        color: #FEA110;
    }



`
export const GeneralStudentDiv = styled.div`
    display:flex;
    justify-content:space-around;   
    /* width:80%; */
    padding:0;
    margin-bottom:15px;
    height: 100px;
    width:100%;


    /* border:solid 2px blue; */
`
export const StudentImageDiv = styled.div`
    display:flex;
    justify-content:space-around;
    flex-direction:row;
    /* background:red;  */
    padding: 5px 0 0 05px;

    img{
        width:40px;
        height:40px;
        border-radius:50%;
    }
`
export const StudentContainer = styled.div`
    /* background:black; */
    display:flex;
    flex-direction:column;
    justify-content:start;
    /* margin-right:20px; */
    width:100%;
    /* justify-content:space-between; */


`

export const StudentNameDiv = styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;
    flex-direction:row;
    margin-bottom:10px;
    /* height:5px; */


    p{
        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        /* line-height: 12px; */
        color: #222C67;
    }

    h5{
        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: bolder;
        font-size: 12px;
        /* line-height: 17px; */
        color: #222C67;

    }

`
export const Text = styled.div`
    /* width: 60%; */
    display:flex;
    justify-content:start;
    flex-direction:column;
    font-family: Helvetica Neue;
    font-size: 10.5px;
    line-height: 13px;
    letter-spacing: 0.02em;
    margin: 0px 0px 5px 75px;
    color: #222C67;
    /* button{ */
        /* width:40%;
        background: rgba(0, 0, 0, 0.1);
        border: 0.25px solid rgba(0, 0, 0, 0.18);
        box-sizing: border-box;
        border-radius: 15px;
        height:20px;
        margin-bottom:10px; */

        button{
        width:120px;
        padding:10px;
        display:flex;
        align-self:center;
        justify-content:center;
        font-size:10px;
        font-weight:bold;
        border-radius:15px;
        border:none;
        margin-bottom: 10px;
        /* margin-bottom:100px; */
    }
    p{
        margin-bottom:10px;
    }


`
export const MainNoteDiv = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    margin: 15px 10px 5px 5px;
    h3{

    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    /* line-height: 21px; */
    color: #222C67;
    
    }
    button{
        background-color:red;
        width:120px;
        border-radius:10px;
        height:30px;
        background: #FFF0D9;
        border: 1px solid #FEA110;
        box-sizing: border-box;
        border-radius: 15px;

        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        color: #FEA110;
    }

`
export const ResearchDiv = styled.div`
    display:flex;
    flex-direction:column;
    /* justify-content:space-around; */
    background-color:#E5F8ED;
    font-size:10px;
    height:100%;
    margin: 15px 10px 5px 5px;
    border-radius:15px;

    p{
        color:rgba(34, 44, 103, 1);
        margin-left:10px;
        

    }
    h4{
        color: rgba(34, 44, 103, 1);
        margin-bottom:20px;
        font-weight:bolder;
        margin:10px 0 10px 10px;

    }

`
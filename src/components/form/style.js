import styled from 'styled-components'

export const FormContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #ECEBEb;
    display:flex;
    justify-content:center;
    align-items: center;
`

export const LoginForm = styled.form`
    width:400px;

    h3{
        text-align: center;
        margin: 0 0 50px 0;
    }

    input{
        background-color: #CFD8FF;
        padding: 10px;
        border: none;

        :focus{
            outline-color: #273B89;
            background-color: #CFD8FF;
        }

    }

    button{
        margin-top: 50px;
        padding: 10px;
        width:100%;
        border: none;
        background-color:#273B89;
        color: white;
        cursor: pointer;
    }
`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;

    label{
        margin: 10px 0 10px 0;
    }
`
export const LabelIcon = styled.img`
    margin:0 5px 0 0;
`
import React, { useContext, useEffect, useState } from 'react'
import { FormContainer, InputDiv, LabelIcon, LoginForm } from '../form/style'
import username from '../../assets/icons/username.svg'
import password from '../../assets/icons/password.svg'
import { UserContext } from '../../contexts/User'
import { AuthContext } from '../../contexts/Auth'

export default function Join({history}) {

    const [form, setForm] = useState({})
    // const user = useContext(UserContext)
    // const [auth,setAuth] = useState()

    // useEffect(() => {
    //     const data = sessionStorage.getItem('Auth')
    //     setAuth(data)
    // }, [])

    function onChangeHandler(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function onClickHandler(e){
        e.preventDefault()
    
    }

    return (
        <FormContainer>
            <LoginForm>
                <h3>Create An Account</h3>
                <InputDiv>
                    <label>First Name</label>
                    <input name="firstName" onChange={onChangeHandler} required/>
                </InputDiv>
                
                <InputDiv>
                    <label>Last Name</label>
                    <input name="lastName" type="text" onChange={onChangeHandler} required/>
                </InputDiv>

                <InputDiv>
                    <label>Username</label>
                    <input name="username" type="text" onChange={onChangeHandler} required/>
                </InputDiv>

                <InputDiv>
                    <label>password</label>
                    <input name="password" type="password" onChange={onChangeHandler} required/>
                </InputDiv>
                
                <button onClick={onClickHandler} >Sign Up</button>
            </LoginForm>
                <h2>Already have an account? <span>Sign in</span></h2>
        </FormContainer>
    )
}

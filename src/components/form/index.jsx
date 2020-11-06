import React, { useContext, useState } from 'react'
import { FormContainer, InputDiv, LabelIcon, LoginForm } from './style'
import username from '../../assets/icons/username.svg'
import password from '../../assets/icons/password.svg'
import { UserContext } from '../../contexts/User'
import { AuthContext } from '../../contexts/Auth'

export default function Form({history}) {

    const [form, setForm] = useState({})
    const user = useContext(UserContext)
    const [auth,setAuth] = useContext(AuthContext)
    console.log(history)
    function onChangeHandler(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function onClickHandler(e){
        e.preventDefault()
    const isUsername = form.username === user.username
    const isPassword = form.password === user.password 
        if(isPassword && isUsername){
            setAuth({
                ...auth,
                isAuthenticated:true
            })
            history.push(`/dashboard/${form.username}`)

        }else{
            alert("UserName or Password is Incorrect")
        }
    }

    return (
        <FormContainer>
            <LoginForm>
                <h3>Welcome Back! Login</h3>
                <InputDiv>
                    <label><LabelIcon src={username} />Username</label>
                    <input name="username" onChange={onChangeHandler} required/>
                </InputDiv>
                
                <InputDiv>
                    <label><LabelIcon src={password} />Password</label>
                    <input name="password" type="password" onChange={onChangeHandler} required/>
                </InputDiv>
                
                <button onClick={onClickHandler} >Sign in</button>
            </LoginForm>

        </FormContainer>
    )
}

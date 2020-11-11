import React, { useContext, useEffect, useState } from "react";
import { FormContainer, InputDiv, LabelIcon, LoginForm } from "./style";
import username from "../../assets/icons/username.svg";
import password from "../../assets/icons/password.svg";
import { UserContext } from "../../contexts/User";
import { AuthContext } from "../../contexts/Auth";

export default function Form({ history }) {
  const [form, setForm] = useState({});
  const [auth, setAuth] = useState({});

  useEffect(() => {
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        username: "michael",
        password: "classwork",
        isLoggedIn: false,
      })
    );
  }, []);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("user"));

    setAuth(data);
  }, []);

  function onChangeHandler(e) {
    const { name } = e.target;
    setForm({
      ...form,
      [name]: e.target.value,
    });
  }

  function onClickHandler(e) {
    e.preventDefault();
    const isUsername = form.username === auth.username;
    const isPassword = form.password === auth.password;
    if (isPassword && isUsername) {
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          username: "michael",
          password: "classwork",
          isLoggedIn: true,
        })
      );
      history.push(`/dashboard/${form.username}`);
    } else {
      alert("UserName or Password is Incorrect");
    }
  }

  return (
    <FormContainer>
      <LoginForm>
        <h3>Welcome Back! Login</h3>
        <InputDiv>
          <label>
            <LabelIcon src={username} />
            Username
          </label>
          <input name="username" onChange={onChangeHandler} required />
        </InputDiv>

        <InputDiv>
          <label>
            <LabelIcon src={password} />
            Password
          </label>
          <input
            name="password"
            type="password"
            onChange={onChangeHandler}
            required
          />
        </InputDiv>

        <button onClick={onClickHandler}>Sign in</button>
      </LoginForm>
      <h2>
        Not yet a Member? <span>Sign up</span>
      </h2>
    </FormContainer>
  );
}

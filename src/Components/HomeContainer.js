import React, { Component } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import Welcome from "./Welcome";
import LoginFail from "./LoginFail";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  width: 20%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 200px;
`;

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVerified: false,
      username: "admin",
      password: "password",
      isDisabled: false
    };
  }

  logout() {
    this.setState({
      isVerified: false,
      loginAttempts: 0
    });
  }

  verifyLogin(username, password) {
    const actualUsername = this.state.username;
    const actualPassword = this.state.password;
    let loginAttempts = this.state.loginAttempts ? this.state.loginAttempts : 0;

    if (username === actualUsername && password === actualPassword) {
      this.setState({
        isVerified: true,
        loginFailed: false
      });
    } else if (loginAttempts === 5) {
      this.setState({
        isDisabled: true
      });
    } else {
      if (document.getElementById("username")) {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
      }

      this.setState({
        loginFailed: true,
        loginAttempts: (loginAttempts += 1)
      });
    }
  }

  render() {
    const isVerified = this.state.isVerified ? this.state.isVerified : "";
    const loginFailed = this.state.loginFailed ? this.state.loginFailed : "";
    const loginAttempts = this.state.loginAttempts
      ? 5 - this.state.loginAttempts
      : "";
    const isDisabled = this.state.isDisabled ? this.state.isDisabled : "";

    return isVerified ? (
      <Welcome logout={this.logout.bind(this)} text="Hello, User!" />
    ) : (
      <Wrapper>
        <Div>
          <LoginForm
            verifyLogin={this.verifyLogin.bind(this)}
            disabled={isDisabled}
          />
        </Div>

        {loginFailed ? (
          <LoginFail
            text="Incorrect Username or Password"
            loginAttempts={"Remaining Login Attempts: " + loginAttempts}
          />
        ) : (
          ""
        )}
      </Wrapper>
    );
  }
}

export default HomeContainer;

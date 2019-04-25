import React from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import styled from "styled-components";

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginForm = props => {
  function handleLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    props.verifyLogin(username, password);
  }

  return (
    <Form>
      <FormGroup>
        <FormControl id="username" type="text" placeholder="Username" />
        <hr />
        <FormControl id="password" type="password" placeholder="Password" />
      </FormGroup>
      <ButtonDiv>
        <Button
          variant="outline-primary"
          onClick={() => handleLogin()}
          disabled={props.isDisabled}
        >
          Submit
        </Button>
      </ButtonDiv>
    </Form>
  );
};

export default LoginForm;

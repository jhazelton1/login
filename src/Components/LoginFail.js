import React from "react";
import styled from "styled-components";

const Div = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const P = styled.p`
  white-space: nowrap;
  margin: 0px;
`;

export const LoginFail = props => {
  return (
    <Div>
      <P>{props.text}</P>
      <P>{props.loginAttempts}</P>
    </Div>
  );
};

export default LoginFail;

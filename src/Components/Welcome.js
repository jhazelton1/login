import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const P = styled.p``;
const Div = styled.div``;

export const Welcome = props => {
  function handleLogout() {
    props.logout();
  }

  return (
    <Div>
      <P>{props.text}</P>
      <Button onClick={() => handleLogout()} variant="outline-danger">
        Logout
      </Button>
    </Div>
  );
};

export default Welcome;

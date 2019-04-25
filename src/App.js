import React from 'react';
import HomeContainer from './Components/HomeContainer'
import styled from 'styled-components'

const Div = styled.div`
  min-height: 100vh;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Div>
      <HomeContainer />
    </Div>
  );
}

export default App;

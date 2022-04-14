import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components/macro';
import { useDarkModeManager } from './features/user/hook';


const Container = styled.div`
    background-color:${({theme})=>theme.bg1};
    ${({theme})=>theme.mediaWidth.upToMedium`
           ${theme.flexRowNoWrap}
           padding: 0 70px;
    `};
    ${({theme})=>theme.mediaWidth.upToExtraSmall`
            ${theme.flexColumnNoWrap}
    `};
`;
const Buttond= styled.button`
  margin-top:20px;
  background-color:'#19b8d0dd';
  cursor:pointer;
`
const Text = styled.p`
  color:${({theme})=>theme.tx1};
  
`

function App() {
  const [darkMode, toggleDarkMode] = useDarkModeManager()
  return (
    <div className="App">
      <Container className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text>
          Edit <code>src/App.tsx</code> and save to reload.
        </Text>
        <Buttond onClick={toggleDarkMode}>toogle darkmode</Buttond>
      </Container>
    </div>
  );
}

export default App;

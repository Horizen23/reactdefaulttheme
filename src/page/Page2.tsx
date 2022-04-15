import React, { Suspense } from 'react';
import styled from 'styled-components/macro';
import { useDarkModeManager, useIsLogin } from '../features/user/hook';
import { ThemedText } from '../theme';
// import { Redirect, Route, Switch } from 'react-router-dom'
import Loader from '../components/Loader';
import { BrowserRouter,Route ,Routes, NavLink,Outlet} from "react-router-dom";

const Container = styled.div`
    background-color:${({theme})=>theme.bg1};
    ${({theme})=>theme.flexColumnNoWrap};
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

function Page2() {
  const user = useIsLogin();
  return (
    <div className="App">
      <Container className="App-header">
        <Suspense fallback={<Loader />}>
        <ThemedText.Main>
            {user.email} 
          </ThemedText.Main>
          <ThemedText.Main>
              Page2  and save to reload
          </ThemedText.Main>
        </Suspense>
      </Container>
    </div>
  );
}

export default Page2;

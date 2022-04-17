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



function Page1() {
  return (
      <Container className="App-header">
        <Suspense fallback={<Loader />}>
        
          <ThemedText.Main>
            Page1  and save to reload
          </ThemedText.Main>
        </Suspense>
      </Container>
  );
}

export default Page1;

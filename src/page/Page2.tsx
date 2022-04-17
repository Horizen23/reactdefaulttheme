import React, { memo, Suspense, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { useDarkModeManager, useIsLogin } from '../features/user/hook';
import { ThemedText } from '../theme';
// import { Redirect, Route, Switch } from 'react-router-dom'
import Loader from '../components/Loader';
import { BrowserRouter,Route ,Routes, NavLink,Outlet} from "react-router-dom";
import api from '../services/Api';

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



function  Page2() {
  const user = useIsLogin();
  const [refreshtokens , setRefreshtokens] = useState([])
  useEffect(()=>{
    api.dashboad().then(res=>setRefreshtokens(res.data))
  },[])
  console.log(refreshtokens)
  return (
      <Container className="App-header">
        <Suspense fallback={<Loader />}>
        <ThemedText.Main>
            {user.email} 
          </ThemedText.Main>
          <ThemedText.Main>
              Page2  and save to reload
          </ThemedText.Main>
          <button onClick={useCallback(()=>{api.dashboad().then()},[])}>oload</button>
        </Suspense>
      </Container>
  );
}

export default memo(Page2);

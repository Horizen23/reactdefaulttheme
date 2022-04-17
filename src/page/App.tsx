import React, { Suspense } from 'react';
import styled from 'styled-components/macro';
import { BrowserRouter,Route ,Routes, NavLink,Navigate, Outlet, useLocation } from "react-router-dom";
import Page1 from './Page1';
import Page2 from './Page2';
import Header from '../components/header';
import { useDarkModeManager, useIsLogin } from '../features/user/hook';
import Login from './Login';
import Signup from './Signup';
import { useDispatch, useSelector } from 'react-redux';
import { ThemedText } from '../theme';
import { updateUserDarkMode } from '../features/user/action';


const MiddlewaresRouter = ({ auth,to }:any) => {
  const user = useIsLogin();
  if(auth !== user.islogin){
     return   <Navigate to={to}  replace />
  }
  return ( <Outlet /> );
}

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


function App() {

  return (<>
      <Header/>
      <div className="App">
        <Container className="App-header">
            <div className="App">
              <Routes>
                <Route path="Page1" element={<Page1 />} />
                <Route element={<MiddlewaresRouter  auth={false} to="/Page1"/>}> 
                      <Route path="login" element={<Login />} />
                      <Route path="signup" element={<Signup />} />
                </Route>
                <Route element={<MiddlewaresRouter auth={true}  to="/login"/>}> 
                    <Route path="Page2" element={<Page2 />} /> 
                </Route>
                <Route index element={<Navigate replace to="Page1" />}  />
                <Route path="*" element={<h1>not found 404</h1>} /> 
              </Routes>
            </div>
        </Container>
      </div>
  </>
  );
}


export default App;

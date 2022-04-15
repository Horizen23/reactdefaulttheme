import React, { Suspense } from 'react';
import styled from 'styled-components/macro';
import { BrowserRouter,Route ,Routes, NavLink,Navigate } from "react-router-dom";
import Page1 from './Page1';
import Page2 from './Page2';
import Header from '../components/header';




function App() {
  return (<>
      <Header/>
      <Routes>

              <Route path="Page1" element={<Page1 />} />
              <Route path="Page2" element={<Page2 />} />
              <Route index element={<Navigate replace to="Page1" />}  />
              <Route path="*" element={<h1>not found 404</h1>} /> 
              
              {/* <Route   path="app/view/liquidity" element={<Liquidity />} /> */}
              {/* <Route path="app/view/liquidity/">
                  <Route path="import/:currencykeyA/:currencykeyB" element={<ImportLiquidity/>} />
                  <Route path="import/:currencykeyA" element={<ImportLiquidity/>} />
                  <Route path="add/:currencykeyA/:currencykeyB" element={<AddLiquidity/>} />
                  <Route path="add/:currencykeyA" element={<AddLiquidity/>} />
                  <Route path="remove/:currencykeyA/:currencykeyB" element={<RemoveLiquidity/>} />
                </Route> */}
      </Routes>
  </>
  );
}


export default App;

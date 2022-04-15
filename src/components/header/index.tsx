import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { useDarkModeManager, useDeviseAuth, useIsLogin } from "../../features/user/hook";
// import styled, { keyframes } from "styled-components/macro";

const WrapHead = styled.div`
    ${(({theme})=>theme.flexRowNoWrap)}
    justify-content:space-between;
    padding:20px;
    background-color:${({theme})=>theme.bg2};
    & div a{
      margin-right:20px
    }

`
export default function Header() {
  const [darkMode, toggleDarkMode] = useDarkModeManager()
  const [onLogin,onLogout] = useDeviseAuth();
  const user = useIsLogin();
  return (
    <WrapHead>
        <div>
            <NavLink to="Page1">Page1</NavLink>
            <NavLink to="Page2">Page2</NavLink>
            {
              !user.islogin&&<NavLink to="login">login</NavLink>
            }
            {/* {JSON.stringify(user)} */}
        </div>
        <div>
            {
              user.islogin&& <button onClick={onLogout}>logout</button>
            }
          <button onClick={toggleDarkMode}>toogle darkmode</button>
        </div>
    </WrapHead>
  );
}

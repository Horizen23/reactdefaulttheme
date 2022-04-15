import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { useDarkModeManager } from "../../features/user/hook";
// import styled, { keyframes } from "styled-components/macro";

const WrapHead = styled.div`
    ${(({theme})=>theme.flexRowNoWrap)}
    justify-content:space-between;
    padding:20px;
    background-color:${({theme})=>theme.bg2};

`
export default function Header() {
  const [darkMode, toggleDarkMode] = useDarkModeManager()
  return (
    <WrapHead>
        <div>
            <NavLink to="Page1">Page1</NavLink>
            <NavLink to="Page2">Page2</NavLink>
        </div>
        <button onClick={toggleDarkMode}>toogle darkmode</button>
    </WrapHead>
  );
}

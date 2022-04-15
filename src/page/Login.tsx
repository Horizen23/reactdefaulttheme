import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import { useDeviseAuth } from '../features/user/hook';

const Culom = styled.div`
    ${({theme})=>theme.flexColumnNoWrap}
    width:400px;
    gap:10px;
    
`


const Login = () => {
    const [onLogin] = useDeviseAuth();
    const inputuser = useRef<HTMLInputElement>(null)
    const inputpassword = useRef<HTMLInputElement>(null)
    useEffect(()=>{
            inputuser.current?.focus()
    },[])
    const loginfn = () =>{
        console.log(inputuser.current?.value
            ,inputpassword.current?.value)
    }
    console.log('rereander')
    return (
        <Culom>
            <input type="text" ref={inputuser} />
            <input type="password" ref={inputpassword} />
            <button onClick={onLogin}>login</button>
        </Culom>
    );
};

export default Login;
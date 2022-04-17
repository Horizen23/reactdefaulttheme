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
        onLogin({
            email:inputuser.current?.value as string,
            password: inputpassword.current?.value as string
        })
    }
    console.log('rereander')
    return (
        <Culom>
            <input type="text" ref={inputuser} />
            <input type="password" ref={inputpassword} />
            <button onClick={loginfn}>login</button>
        </Culom>
    );
};

export default Login;
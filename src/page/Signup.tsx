import React, { memo, Suspense, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import { useDeviseAuth } from '../features/user/hook';
import api from '../services/Api';
import { ThemedText } from '../theme';


const Culom = styled.div`
    ${({theme})=>theme.flexColumnNoWrap}
    width:400px;
    gap:10px;
    
`
const Signup = () => {
    const inputuser = useRef<HTMLInputElement>(null)
    const inputemail = useRef<HTMLInputElement>(null)
    const inputpassword = useRef<HTMLInputElement>(null)
    useEffect(()=>{
            inputuser.current?.focus()
    },[])
    const loginfn = () =>{
        api.signup(
            inputemail.current?.value as string,
            inputpassword.current?.value as string,
            inputuser.current?.value as string
        )
    }
    return (
        <Culom>
            <ThemedText.Label>username</ThemedText.Label>
            <input type="text" ref={inputuser} />
            <ThemedText.Label>email</ThemedText.Label>
            <input type="text" ref={inputemail} />
            <ThemedText.Label>password</ThemedText.Label>
            <input type="password" ref={inputpassword} />
            <button onClick={loginfn}>Signup</button>
        </Culom>
    );
};

export default memo(Signup);

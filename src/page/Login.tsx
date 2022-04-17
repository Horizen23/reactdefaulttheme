import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { useDeviseAuth } from '../features/user/hook';
import api from '../services/Api';
import { ThemedText } from '../theme';

const Culom = styled.div`
    ${({theme})=>theme.flexColumnNoWrap}
    width:400px;
    gap:10px;
    
`

const Login = () => {
    const [onLogin] = useDeviseAuth();
    const inputuser = useRef<HTMLInputElement>(null)
    const inputpassword = useRef<HTMLInputElement>(null)
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
            inputuser.current?.focus()
    },[])
    const loginfn = async () =>{
        setLoading(true)
       let res =  await  api.login(inputuser.current?.value as string, inputpassword.current?.value as string)
       if(res.status === 200){
        onLogin({
            accessToken: res.data.accessToken ,
            email: res.data.email ,
            id: res.data.id ,
            refreshToken: res.data.refreshToken ,
            roles: res.data.roles,
            username:res.data.username 
        })
       }
       setLoading(false)
    }
    console.log('rereander')
    return (
        <Culom>
            <input type="text" ref={inputuser} />
            <input type="password" ref={inputpassword} />
            <button onClick={loginfn}>login</button>
            {
                loading&&<ThemedText.Label>loadding</ThemedText.Label>
            }
        </Culom>
    );
};

export default Login;
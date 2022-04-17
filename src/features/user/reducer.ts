import { createReducer } from "@reduxjs/toolkit";
import { Login, Logout, refreshToken, updateUserDarkMode } from "./action";

export interface UserState {
    userDarkMode: boolean | null 
    auth: {
        islogin:boolean;
        email: string;
        accessToken: string;
        refreshToken: string;
    }
}
const initialState:UserState = {
    userDarkMode:true,
    auth: {
        islogin:false,
        email: '',
        accessToken: '',
        refreshToken: ''
    }
}
export default  createReducer(initialState,(builder=>{
    builder.addCase(updateUserDarkMode, (state, action) => {
        state.userDarkMode = action.payload.userDarkMode
    })
    builder.addCase(refreshToken, (state, action) => {
        state.auth = {
            ...state.auth,
            accessToken : action.payload
        }
    })
    builder.addCase(Login.fulfilled, (state, action:any) => {
        state.auth = {
            islogin : true,
            email : 'com100pb@gmail.com',
            accessToken : action.payload.accessToken as string,
            refreshToken : action.payload.refreshToken as string
        }
    })
    builder.addCase(Logout.fulfilled, (state, action:any) => {
        console.log(action.payload)
        state.auth = {
            islogin : false,
            email : '',
            accessToken : "",
            refreshToken : ""
        }
    })
    
}))
import { createReducer } from "@reduxjs/toolkit";
import { updateUserDarkMode } from "./action";

export interface UserState {
    userDarkMode: boolean | null 
}
const initialState:UserState = {
    userDarkMode:true
}
export default  createReducer(initialState,(builder=>{
    builder.addCase(updateUserDarkMode, (state, action) => {
        state.userDarkMode = action.payload.userDarkMode
    })
    
}))
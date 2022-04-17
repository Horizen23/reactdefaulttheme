import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/Api";
export const updateUserDarkMode = createAction<{ userDarkMode: boolean }>('user/updateUserDarkMode')
export const refreshToken = createAction<string>("user/refreshToken")
const axios = require('axios');
export const Login  =  createAsyncThunk(
    'users/fetchByIdStatus',
    async (user:{email:string,password:string}, {rejectWithValue,fulfillWithValue}) => {
          try {
            const response = await api.login(user.email,user.password);
            return  fulfillWithValue(response.data)
          } catch (error) {
            return  rejectWithValue('')
          }
    }
)
export const Logout  =  createAsyncThunk(
    'users/Logout',
      (user, {rejectWithValue,fulfillWithValue}) => {
        return  fulfillWithValue('')
    }
)
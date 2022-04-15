import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
export const updateUserDarkMode = createAction<{ userDarkMode: boolean }>('user/updateUserDarkMode')
const axios = require('axios');
export const Login  =  createAsyncThunk(
    'users/fetchByIdStatus',
    async (user, {rejectWithValue,fulfillWithValue}) => {
        var data = JSON.stringify({
            "email": "com100pb@gmail.com",
            "password": "EZ"
          });
          var config = {
            method: 'POST',
            url: 'http://localhost:5000/login',
            headers: { 
              'x-auth-token': '', 
              'Content-Type': 'application/json'
            },
            data : data
          };
          try {
            const response = await axios(config as any);
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
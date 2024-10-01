import {createSlice} from '@reduxjs/toolkit';
 

const AuthSlice = createSlice({
    name:"auth",
    initialState: {
        user:"",
        isLoggedin: false
    },
    reducers:{
        login:(state) => {
            state.isLoggedin = true;
        },
        logout: (state) => {
            state.isLoggedin = false;
        }
    }
})

export const {login,logout} = AuthSlice.actions;
export  default AuthSlice.reducer;
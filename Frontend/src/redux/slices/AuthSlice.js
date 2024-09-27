import {createSlice} from '@reduxjs/toolkit';


const AuthSlice = createSlice({
    name:"auth",
    initialState: {
        user:"",
        isLoggedin: false
    },
    reducers:{
 
    }
})

export const {setLoggedIn} = AuthSlice.actions;
export  default AuthSlice.reducer;
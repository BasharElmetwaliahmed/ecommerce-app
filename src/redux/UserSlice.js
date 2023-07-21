import { createSlice} from '@reduxjs/toolkit';






const userSlice=createSlice({
    name:'user',
    initialState:{
        user:null,
        isAuthenticated:false,

    },

    reducers:{
    logIn:(state,action)=>{
    state.user=action.payload;
    state.isAuthenticated=true;
    },
    logOut:(state)=>{
        state.user=null;
        state.isAuthenticated=false;
    }


    }

}

)

export const  userReducer=userSlice.reducer;
export const {logIn,logOut}=userSlice.actions

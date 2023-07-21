import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';




export const getProducts = createAsyncThunk(
  "cart/cartProducts",
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data=await response.json()
      return data ;
    } catch (error) {
      return thunkAPI.rejectWithValue("There was something wrong here");
    }
  }
);


const productsSlice=createSlice({
    name:'products',
    initialState:{
        products:[],
        isLoading:false,
        error:null
    },
    
        extraReducers:{
     [getProducts.pending]:(state)=>{
        state.isLoading=true
     },       
    [getProducts.fulfilled]:(state,action)=>{
        state.products=action.payload
        state.isLoading=false;
        state.error=null
    },
    [getProducts.rejected]:(state,action)=>{
        state.products=[];
        state.error=action.payload;
        state.isLoading=false;

    }

}
    ,
})

export const productsReducers=productsSlice.reducer;
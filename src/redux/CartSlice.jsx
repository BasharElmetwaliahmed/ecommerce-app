import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';


export const getCartProducts = createAsyncThunk(
  "cart/cartProductsget",
  async (uid, thunkAPI) => {
    try {
     const docRef =  await doc(db, "cart",uid );
     const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()){ 
      return docSnap.data();
    }
     else return []
  
    } catch (error) {
    }
  }
);







const initState={
    cartProducts:[],
    favProducts:[],

}

const cartSlice=createSlice({
    name:'cart',
    initialState: initState,
    extraReducers:{
      [getCartProducts.fulfilled]:(state,action)=>{
          state.favProducts=action.payload.favProducts;
          state.cartProducts=action.payload.cartProducts

      },
  
    },

    reducers:{
    addToCart:(state,action)=>{
        let selectedProduct=action.payload

        const currentCart=state.cartProducts

        const existProduct=currentCart.find(product=>{
          return product.id==selectedProduct.id});
        

                //if product exist,then delete

        if(existProduct){
            state.cartProducts =currentCart.filter(product=>selectedProduct.id!=product.id)

        }
              //if product not exist on cart
        else{
            selectedProduct={
              amount:1,
              id:selectedProduct.id

            };
            state.cartProducts.push(selectedProduct)
        }

    },
   addToCartWithAmount:(state,action)=>{
        let selectedProduct=action.payload.product;
        const currentCart=state.cartProducts;

          const existProduct=currentCart.find(product=>{
          return product.id==selectedProduct.id});
         if(!existProduct){
              selectedProduct={
              amount:action.payload.amount,
              id:selectedProduct.id

            };
            state.cartProducts.push(selectedProduct)}

   }
    ,
    // to remove product from cart
    removeFromCart:(state,action)=>{
              const selectedProduct=action.payload
              const currentCart=state.cartProducts
              state.cartProducts =currentCart.filter(product=>selectedProduct.id!=product.id)

    },

    //to add increase the amount of product
    increaseProductAmount:(state,action)=>{
      //selectec product
              let selectedProduct=action.payload


              //current cart
              const currentCart=state.cartProducts;

              
           state.cartProducts=currentCart.map(product=>{
            if(selectedProduct.id==product.id)
            product.amount++;
          return product
        })
    },
    //decrease quantity of product
    decreaseProductAmount:(state,action)=>{
                    let selectedProduct=action.payload;
                    let amount;
      
                    if(!selectedProduct.amount>=1){
                      return
                    }


              //current cart
              const currentCart=state.cartProducts;

              
           state.cartProducts=currentCart.map(product=>{
            if(selectedProduct.id==product.id){
                           amount=selectedProduct.amount-1
          }
          else{
            return product
          }
          return {
            ...product,
            amount:amount
          }
        })

    },
    

    //add  to favourite
    addToFav:(state,action)=>{{
        let selectedProduct=action.payload
        const currentCart=state.favProducts

        const existProduct=currentCart.find(product=>{
          return product.id==selectedProduct.id});
        

                //if product exist,then delete

        if(existProduct){
            state.favProducts =currentCart.filter(product=>selectedProduct.id!=product.id)


        }
        else{
          state.favProducts.push({
            id:selectedProduct.id,
          })
        }
    }},



  
  },
  emptyCart:(state)=>{
    state=initState
  }
})


export const cartReducer=cartSlice.reducer;
export const  {addToCart,removeFromCart,increaseProductAmount,decreaseProductAmount,addToFav,addToCartWithAmount}=cartSlice.actions
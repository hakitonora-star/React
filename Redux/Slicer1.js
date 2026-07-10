import { createSlice } from "@reduxjs/toolkit";

const reactslicer=createSlice({
    name:"slice1",
    initialState:{count:0}, //intial state ek object hai jisme count ek key hai 
    reducers:{ // increment mein hmne intial state wala object hmne call back function me de diya 
        Increment:(state)=>{state.count=state.count+1},
        Decrement:(state)=>{state.count=state.count-1},
        Reset:(state)=>{state.count=0}
    }

})
export const {Increment,Decrement,Reset}=reactslicer.actions // ye action laake dega saare method
export default reactslicer.reducer;
/*

const initial State={ // ye hai intial state as object jisme count key hai yhi object hmne diya hai as state
  count:3

}

*/

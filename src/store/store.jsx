import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState={
    counter:0,
    show:true
}

const counterSlice=createSlice({
    name:"counter",
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increse(state,action){
            state.counter=state.counter+action.payload
        },
        toggle(state){
            state.show=!state.show
        }
    }
});


const authInitialState={
    isAuth:false,
};
const authSlice=createSlice({
    name:"auth",
    initialState:authInitialState,
    reducers:{
        login(state){
            state.isAuth=true;
        },
        logout(state){
            state.isAuth=false;
        }
    }
})



const store=configureStore({
    reducer:{counter:counterSlice.reducer, auth:authSlice.reducer}
});
export const counterAction=counterSlice.actions;
export const authAction=authSlice.actions;
export default store;
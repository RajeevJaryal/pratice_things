import React from "react";
import { useSelector,useDispatch } from "react-redux";


const Showing=()=>{
    const counter=useSelector(state=>state.counter);
    const dispatch=useDispatch();


    const increment=()=>{
        dispatch({type:"increment"})
    }

    const decrement=()=>{
        dispatch({type:"decrement"})
    }
    return(
        <>
        <button onClick={decrement}>Decremenen by 5</button>
        {counter}
        <button onClick={increment}>Increment By 5</button>
        </>
    )
}

export default Showing;
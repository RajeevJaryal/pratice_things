import React from "react";
import { useSelector,useDispatch } from "react-redux";


const Showing=()=>{
    const counter=useSelector(state=>state.counter);
    const show=useSelector(state=>state.show);
    const dispatch=useDispatch();


    const showCounter=()=>{
        dispatch({type:"toggle"})
    }
    const increment=()=>{
        dispatch({type:"increment"})
    }
    const betterIncrement=()=>{
        dispatch({type:"increment", amount:5})
    }
    const decrement=()=>{
        dispatch({type:"decrement"})
    }
    return(
        <>
        <button onClick={decrement}>Decremenen by 5</button>
        {show && <div>{counter}</div>}
        <button onClick={betterIncrement}> Increment better</button>
        <button onClick={increment}>Increment By 5</button>

        <button onClick={showCounter}>Toggle</button>
        </>
    )
}

export default Showing;
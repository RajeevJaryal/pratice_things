import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../../store/store";


const LogInForm=()=>{
    const isAuth=useSelector((state)=>state.auth.isAuth);
    const dispatch=useDispatch();
    const formSubmitHandler=(e)=>{
        e.preventDefault();
        
        dispatch(authAction.login());
        
    }
    return(
        <>
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"/>
            <label htmlFor="password">Password</label>
            <input type="password"/>
            <button type="submit">Login</button>
        </form>
        
        </>
    )
}
export default LogInForm;
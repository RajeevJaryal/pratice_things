import React from "react";
import "./HeaderSection.css";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../../store/store";
const HeaderSection=()=>{
    const isAuth=useSelector((state)=>state.auth.isAuth);
    const dispatch=useDispatch();
    const logouthandler=()=>{
        dispatch(authAction.logout());
    }
    return(
        <>
        <div className="container">
            <div>
                <h2>Redux Auth</h2>
            </div>
            {isAuth && <div className="ItemsDiv">
                <h4>My Product</h4>
                <h4>My Sales</h4>
                <button onClick={logouthandler} className="logOutBtn">Logout</button>
            </div>}
        </div>
        </>
    )
}

export default HeaderSection;
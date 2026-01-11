import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/store";
import "./Showing.css";
const Showing = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.show);
  const dispatch = useDispatch();

  const showCounter = () => {
    dispatch(counterAction.toggle());
  };
  const increment = () => {
    dispatch(counterAction.increment());
  };
  const betterIncrement = () => {
    dispatch(counterAction.increse(5));
  };
  const decrement = () => {
    dispatch(counterAction.decrement());
  };

  return (
    <div className="showing-container">
      <button className="dec-btn" onClick={decrement}>
        Decremenen
      </button>

      {show && <div className="counter-value">{counter}</div>}

      <button className="better-btn" onClick={betterIncrement}>
        Increment by 5
      </button>

      <button className="inc-btn" onClick={increment}>
        Increment
      </button>

      <button className="toggle-btn" onClick={showCounter}>
        Toggle
      </button>
    </div>
  );
};

export default Showing;

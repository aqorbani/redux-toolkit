import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  selectCounter,
} from "../features/counter/counterSlice";

const Counter = () => {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{counter}</h2>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;

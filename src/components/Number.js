import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  selectNumber,
} from "../features/number/numberSlice";

const Number = () => {
  const number = useSelector(selectNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{number}</h2>
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

export default Number;

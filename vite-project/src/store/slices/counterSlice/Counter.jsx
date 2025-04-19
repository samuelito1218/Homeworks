import {useSelector, useDispatch} from "react-redux";
import { increment, decrement } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  
  return(
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrementar contador</button>
      <input type="number" 
      value = {value}
      onChange={(e) => setValue(Number(e.target.value))}
      placeholder="Ingrese un número en el que se va a ir incrementando el contador"
      />
      <button onClick={() => dispatch(increment(value))}>Incrementar contador</button>

    </div>
  );
};
export default Counter;
  
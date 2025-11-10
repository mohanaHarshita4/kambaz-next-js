'use client';

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";
import { Button } from "react-bootstrap";

export default function CounterRedux() {
  const count = useSelector((state: any) => state.counterReducer.count);
  const dispatch = useDispatch();

  return (
    <div id="wd-counter-redux" className="my-3">
      <h3>Counter Redux</h3>
      <h4>Count: {count}</h4>
      <div className="d-flex gap-2">
        <Button variant="success" onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <Button variant="danger" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </div>
      <hr />
    </div>
  );
}

'use client';

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";
import { Button } from "react-bootstrap";

export default function AddRedux() {
  const dispatch = useDispatch();
  const sum = useSelector((state: any) => state.addReducer.sum);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const handleAdd = () => {
    dispatch(add({ a: Number(a), b: Number(b) }));
  };

  return (
    <div id="wd-add-redux" className="my-3">
      <h3>Add Redux</h3>
      <div className="d-flex gap-2 mb-2">
       <input
  type="number"
  className="form-control w-25"
  value={a}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setA(Number(e.target.value))}
  placeholder="Enter a"
/>
<input
  type="number"
  className="form-control w-25"
  value={b}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setB(Number(e.target.value))}
  placeholder="Enter b"
/>

        <Button variant="primary" onClick={handleAdd}>
          Add
        </Button>
      </div>
      <h4>Sum: {sum}</h4>
      <hr />
    </div>
  );
}

'use client';

import { useSelector } from "react-redux";

export default function HelloRedux() {
  const message = useSelector((state: any) => state.helloReducer.message);

  return (
    <div id="wd-hello-redux" className="my-3">
      <h3>Hello Redux</h3>
      <h4>{message}</h4>
      <hr />
    </div>
  );
}

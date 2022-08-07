import { Fragment, useState } from "react";

function HookUseStateExample() {
  const [count, setCount] = useState(0);

  const buttonClick = (event) => {
    setCount((prevState) => prevState.count + 1);
  };

  return (
    <Fragment>
      <label> counter value is {count}</label>
      <button onClick={buttonClick()}> Click Me</button>
    </Fragment>
  );
}

export default HookUseStateExample;

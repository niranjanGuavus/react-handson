import { Fragment, useState } from "react";

function HookUseStateExample() {
  const [count, setCount] = useState(0);

  const buttonClick = () => {
    /**
     * we can change the value in two ways, 
     * 1:- capture the previous value and update on top of it 
     * 2:- just pass the fresh value to callback
     * Note:- 1st one is prefer in both the case.
     * 
     */
    setCount((prevState) => {
      return prevState + 1
    });
    //setCount(count + 1);
  };

  return (
   
      <Fragment>
      <label> Use State example To increment counter :  {count}</label>
      <br/>
      <button onClick={buttonClick}> Click Me</button>
      </Fragment>
  );
}

export default HookUseStateExample;

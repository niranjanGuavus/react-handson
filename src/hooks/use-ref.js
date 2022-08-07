import { Fragment, useRef } from "react";

/**
 * The main objective os use-ref is we can directly point to the dom element 
 * and we can avoid the component rerender and update the dom value by use-ref.
 * 
 */
function HookUseRef() {
    const valueRef = useRef("");
    const inputRef = useRef("");


    const inputValeChange = ()=>{
        valueRef.current.innerText = inputRef.current.value;
    }

    console.log("component rerender")
    return(
        <Fragment>
            <h1 ref={valueRef}></h1>
            <input ref={inputRef} onChange={inputValeChange}></input>
        </Fragment>
    );
}

export default HookUseRef;
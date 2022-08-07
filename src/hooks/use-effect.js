import { useEffect, useState } from "react";

function HookUseEffect() {
    const [count, setCount] = useState(0);

    // run once when the component initialize 
    useEffect(
        ()=>{
            console.log("use effect component mount")
        }, []
    );

    // run when the count change
    useEffect(
        ()=>{
            console.log("use effect component update on conditional")
        }, [count]
    );

    // run if any state change inside the component abd return executes in unmount
    useEffect(
        ()=>{
            console.log("use effect component update if any state change");

            return () => console.log("good bye component");
        }
    );


    const buttonClick = () => {
        setCount(count + 1);
      };


    return (
        <button onClick={()=>buttonClick()}> {count}</button>
    )
}

export default HookUseEffect;
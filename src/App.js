import EnhancedComponent from "./high-order-component/higher-order-component";
import OriginalComponent from "./high-order-component/original-component";
import useCounter from "./hooks/custom-counter-hook";
import "./styles.css";

export default function App() {
  // higher order component example 
  const HOC = EnhancedComponent(OriginalComponent)
  const count = useCounter(true);
  return (
    <div className="App">
      <h1>Interview practice</h1>
      <h2>Start editing to see some magic happen!</h2>
      <br></br>
      {/* <HOC></HOC>
      <br></br>
      <HookUseStateExample /> */}
      <br></br>
      {/* <HookUseEffect/>
      <br></br>
      <HookUseContext></HookUseContext>
      <br></br> */}
      {/* <HookUseRef></HookUseRef> */}
      <br></br>
      {/* <HookUseReducer initialCount={10}></HookUseReducer> */}
      {/* <HookUseMemo></HookUseMemo> */}
      {count}
    </div>
  );
}

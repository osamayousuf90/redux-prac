import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [stateUpdate , setStateUpdate] = useState()
  const [text, setText] = useState([])
    
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()

  const a = (myRef, e) => {
    setStateUpdate(!stateUpdate)
    setText([...text, e.target.value])
    myRef?.current.focus()
    var one = text[0] = ref1.current.value;
    var two = text[1] = ref2.current.value;
    var three = text[2] = ref3.current.value;
    var four = text[3] = ref4.current.value;

    var ans = one + two + three + four;
    ans.toString();
    console.log("ans ====>", ans)
    if (four === "") {
      ref3.current.focus()
    } else {
      console.log("four is full")
    }

  }



  
  

  return (
    <div className="App">
      <input maxLength={1} onChange={(e) => a(ref2,e)} ref={ref1} className="box"></input>
      <input maxLength={1} onChange={(e) => a(ref3,e)} ref={ref2}  className="box"></input>
      <input maxLength={1} onChange={(e) => a(ref4,e)} ref={ref3} className="box"></input>
      <input maxLength={1} onChange={(e) => a(ref4, e)} ref={ref4} className="box"></input>
      {/* <input onChange={() => a(1)} ref={ref1} className="box"></input>
      <input onChange={() => a(2)} ref={ref2}  className="box"></input>
      <input onChange={() => a(3)} ref={ref3} className="box"></input>
      <input onChange={() => a(4)} ref={ref4} className="box"></input> */}
  
       <button onClick={() => a()}>Update</button>
    </div>
  );
}

export default App;

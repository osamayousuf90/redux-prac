import { useEffect, useRef, useState } from 'react';
import OTPInput, { ResendOTP } from "otp-input-react";  
import './App.scss';

function App() {
  const [stateUpdate , setStateUpdate] = useState()
  const [text, setText] = useState([])
  const [OTP, setOTP] = useState("");
    
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()


  const a = (myRef, e) => {
    setStateUpdate(!stateUpdate)
    setText([...text, e.target.value])

    var one = text[0] = ref1?.current?.value;
    var two = text[1] = ref2?.current?.value;
    var three = text[2] = ref3?.current?.value;
    var four = text[3] = ref4?.current?.value;
  
  
    var ans = one + two + three + four;
    ans.toString();

    if (myRef === 1) {
      ref2?.current.focus()
    } else if (myRef === 2) {
      ref3.current.focus()
    } else if (myRef === 3) {
      ref4.current.focus()
    } 
    console.log("ans ====>", ans)
  }



  const back = (e , res) => {
   
    if (e.key === "Backspace") {
      ref4.current.value = "" 
      if (res === 4) { 
        ref4.current.value = "" 
        ref3.current.focus()
      } else if (res === 3) {
          ref4.current.value = "" 
        ref2.current.focus()
        // ref2.current.value = ""
       }else if (res === 2) {
        ref1.current.focus()
        // ref1.current.value = ""
       }
    }

  }
  
  

  return (
    <div className="App">
      <OTPInput
      value={OTP}
      onChange={setOTP}
      autoFocus
      OTPLength={4}
      otpType="number"
      disabled={false}
      secure
    />
    <ResendOTP handelResendClick={() => console.log("Resend clicked")} />
      {/* <input maxLength={1} onKeyDown={(e) => back(e , 1)} onChange={(e) => a(1,e)} ref={ref1} className="box"></input>
      <input maxLength={1} onKeyDown={(e) => back(e , 2)} onChange={(e) => a(2,e)} ref={ref2}  className="box"></input>
      <input maxLength={1} onKeyDown={(e) => back(e , 3)} onChange={(e) => a(3,e)} ref={ref3} className="box"></input>
      <input maxLength={1} onKeyDown={(e) => back(e , 4)} onChange={(e) => a(4, e)} ref={ref4} className="box"></input>   */}
    </div>
  );
}

export default App;

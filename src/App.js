// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Pin from './Components/Pin';

function App() {
  const[otp,setOtp] = useState("")
  return (
    <div className="App">
     <Pin length={4} 
     setOtphandler={(value)=>{
      setOtp(value)
     }}
     />   
   <h4>OTP value is {otp}</h4>
    
    </div>
  );
}

export default App;

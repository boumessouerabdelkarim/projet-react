import './App.css';
import React from "react";


function App() {
  return (
    <div className='form1' >
    <h1 className='titre'>Login Form</h1>
    <form className='formcontainer'  >
   
    
    
    <div className="container">
      <label  style={{ color: 'rgb(61, 9, 182)'}} htmlFor='uname'><strong>Username</strong></label>
      <input type="text" placeholder="Enter Username" name="uname"className='imput1' required></input>
      <label  style={{ color: 'rgb(61, 9, 182)'}} htmlFor="psw"><strong>Password</strong></label>
      <input type="password" placeholder="Enter Password" className='imput1' name="psw" required></input>
    </div>
    <button type="submit" className='login'>Login</button>
    <div className="container" >
      
      <input type="checkbox" name="remember"></input>
      <label> Remember me</label>
     
    </div>
  </form>
  </div>
  
  );
  }

export default App;

import './App.css';



function App() {
  return (
    <div>
    <h1 className='titre'>Login Form</h1>
    <form className='from1'  >
   
    
    
    <div className="container">
      <label for="uname"><strong>Username</strong></label>
      <input type="text" placeholder="Enter Username" name="uname"className='imput1' required></input>
      <label for="psw"><strong>Password</strong></label>
      <input type="password" placeholder="Enter Password" name="psw" required></input>
    </div>
    <button type="submit" className='login'>Login</button>
    <div className="container" >
      <label >
      <input type="checkbox"  checked="checked" name="remember"> Remember me</input>
      </label>
      <span className="psw"> Forgot password?</span>
    </div>
  </form>
  </div>
  
  );
}

export default App;

// Login Signup 
import React from 'react' ;
import '../Styles/Login.css' ;
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
      <div className="login-container">
          <h1>LOGIN</h1>

        <div className="login-fields">
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />

        </div>

        <button>Login</button>

        <p className="login1"> Create an account ?<span> <Link to='/register'> Click here </Link></span> </p>
        <div className="checkbox1">
          {/* <input type="checkbox " name='' id='' /> */}
          <p>By clicking , you agree to our <Link> Terms of Service</Link> and <Link>Privacy Policy.</Link></p>
        </div>
      </div>

    </div>
  )
}

export default Login ;

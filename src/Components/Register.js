// Login Signup 
import React from 'react' ;
import '../Styles/Register.css' ;
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='login-signup'>
      <div className="signup-container">
          <h1>REGISTER</h1>

        <div className="signup-fields">
          <input type="name" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />

        </div>

        <button>Continue</button>

        <p className="login2"> Already have an account ? <span> <Link to='/login'>Login here </Link></span></p>
        <div className="checkbox2">
          {/* <input type="checkbox " name='' id='' /> */}
          <p>By clicking , you agree to our <Link> Terms of Service</Link> and <Link>Privacy Policy.</Link></p>
        </div>
      </div>

    </div>
  )
}

export default Register ;

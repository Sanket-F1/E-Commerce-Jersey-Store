import React from 'react' ;
import Logo from '../Assets/Logo.png' ;
import {NavLink } from 'react-router-dom' ;
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../Styles/Navbar.css' ;
import { useState , useContext } from 'react';
import { ShopContext } from '../Context/ShopContext.js'



function Navbar() {

  const [menu , setMenu] = useState('home') ; 
  const {getTotalCartItems} = useContext(ShopContext);

  

  return (
    <div className="navbar">
        <div className="nav-logo">
           <NavLink to="/"><img src={Logo} alt="Logo" /></NavLink> 
           <p>Free Shipping All over India</p>

        </div>
        
          <ul className="nav-menu">
              <li onClick={() => {setMenu('home')}}> <NavLink to="/"> Home {menu === 'home'? <hr /> :<></>} </NavLink> </li>
              <li onClick={() => {setMenu('club')}}> <NavLink to="/club"> Season 2024/25 {menu === 'club'? <hr /> :<></>}</NavLink>  </li>    
              <li onClick={() => {setMenu('euro')}}> <NavLink to="/euro"> Internationals {menu === 'euro'? <hr /> :<></>}</NavLink> </li>
              <li onClick={() => {setMenu('copa')}}>  <NavLink to="/copa"> Clearance Sale {menu === 'copa'? <hr /> :<></>}</NavLink> </li> 
          </ul>
        

        <div className="nav-login-cart">
            <NavLink to="/login"> <button> Login</button></NavLink>
            
            <div className="nav-cart">
                <NavLink to="/cart"> <ShoppingCartOutlinedIcon /></NavLink>
            </div>
            
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>    

    </div>
  )
}

export default Navbar ;

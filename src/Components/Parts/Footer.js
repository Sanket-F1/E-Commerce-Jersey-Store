import React from 'react' ;
import Logo from '../../Assets/Logo.png' ;
import '../../Styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={Logo} alt="" />
       

            <p>Jersey Store</p>
        </div>

        <ul className="links">
            <li>Company</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
      
      <div className="social">
         <div className="icons">
            <InstagramIcon />
            <XIcon />
            <FacebookIcon />


         </div>
      </div>

      <div className="copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved. </p>
      </div>
    </div>
  )
}

export default Footer;

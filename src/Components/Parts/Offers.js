import React from 'react' ;
import '../../Styles/Offers.css'
import mbappe from '../../Assets/mbappe.png'
import img1 from '../../Assets/Ars-removebg.png' ;
import img2 from '../../Assets/RBL-removebg.png' ;
import img3 from '../../Assets/Bel-removebg.png' ;
import img4 from '../../Assets/inter-removebg.png' ;

import img5 from '../../Assets/liv-removebg.png' ;
import { Link } from 'react-router-dom';



function Offers() {
  return (
    <div className='offers'>

    <img className='small q' src={img1} alt="" />
    <img className='small w' src={img2} alt="" />
    <img className='big e' src={img3} alt="" />
    <img className='small r' src={img4} alt="" />
    <img className='big t' src={img5} alt="" />


        <div className="o-left">
            <h1>Clearance Sale</h1>
            <h2>Sale upto 50% Off</h2>
            <Link to='/copa'><button>Check Now</button></Link>
        </div>

        <div className="o-right">
        <img src={mbappe} alt="" />

        </div>
     
    </div>
  )
}

export default Offers ;
 
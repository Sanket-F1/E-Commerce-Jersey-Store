import React from 'react' ;
import '../../Styles/Insta.css'
import img1 from '../../Assets/Insta-Banner.jpg'
import img2 from '../../Assets/Insta-Banner2.jpg'


function Insta() {
  return (
     <div className="instabig">

        <div className="img1">
           <img src={img1} alt="" />
        </div>

        <div className='insta'>
        <h1>FOLLOW US ON <br /> INSTAGRAM</h1>
        <p>Stay upto date with New Arrivals <br />and all the offers coming your way</p>
        <button>GO TO INSTAGRAM</button>
    
        
        </div>

        <div className="img2">
           <img src={img2} alt="" />
        </div>

     </div>
    
  )
}

export default Insta ;

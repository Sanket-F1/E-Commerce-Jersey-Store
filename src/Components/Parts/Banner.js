import React from 'react' ;
import '../../Styles/Banner.css' ;
import EastIcon from '@mui/icons-material/East';

import { Link } from 'react-router-dom';





function Banner() {
  return (
   
         <div className='banner'>
                <div className="banner-content" >  
                    <div>
                        <Link to="/club"><button className='btn'>Shop Now <EastIcon /></button> </Link>
                    </div>

                </div>

        </div>

 
  

       
  
  )
}

export default Banner ;

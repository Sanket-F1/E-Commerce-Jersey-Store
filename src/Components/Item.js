import React, { useState } from 'react' ;
import '../Styles/Item.css'
import { Link } from 'react-router-dom';

function Item(props) {

  const [imgSrc , setImgSrc] = useState(props.image) ;

   const hnadleMouseEnter = () => {
    setImgSrc(props.hoverImg) ;
   }

   const handleMouseLeave = () => {
    setImgSrc(props.image) ;
   }



  return (
    <div className='item' >
       <Link to={`/product/${props.id}`} >

          <img onClick={ () => window.scrollTo(0,0)} src={imgSrc} alt="product image" className='item-image' onMouseEnter={hnadleMouseEnter} onMouseLeave={handleMouseLeave}/>

       </Link>
       <p>{props.name}</p>

       <div className="item-price">

          <div className="price">
                &#8377; {props.price}
            </div>

          <div className="oldprice">
              {props.oldprice}
            </div>     
       </div>
       
    </div>
  )
}

export default Item ;
